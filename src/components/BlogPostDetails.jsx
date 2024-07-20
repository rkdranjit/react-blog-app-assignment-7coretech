import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postIndex = parseInt(id, 10);
  const post = posts[postIndex];

  if (!post) return <p>Post not found</p>;

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="primary"
        sx={{ marginBottom: "20px" }}
      >
        Back
      </Button>
      <Card>
        {post.urlToImage && (
          <CardMedia
            component="img"
            height="140"
            image={post.urlToImage}
            alt={post.title}
          />
        )}
        <CardContent>
          <Typography variant="h4" component="h1">
            {post.title}
          </Typography>
          <Typography variant="body1" component="p">
            {post.content || "Content not available"}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogPostDetails;
