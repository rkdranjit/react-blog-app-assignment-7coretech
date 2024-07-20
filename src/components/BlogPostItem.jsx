import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

const BlogPostItem = ({ post, index }) => {
  return (
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
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.description}
        </Typography>
        <Typography variant="caption" component="p">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
        <Button
          component={Link}
          to={`/post/${index}`}
          variant="contained"
          color="primary"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogPostItem;
