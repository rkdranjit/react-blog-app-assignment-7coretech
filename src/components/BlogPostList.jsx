import React, { useState, useEffect } from "react";
import { Container, Grid, Pagination, Box } from "@mui/material";
import BlogPostItem from "./BlogPostItem";
import { fetchPosts } from "../utils/api";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postsPerPage = 21;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await fetchPosts("technology", page);
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <Container>
      <Grid container spacing={3}>
        {paginatedPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogPostItem post={post} index={index} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default BlogPostList;
