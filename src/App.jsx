import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=technology&page=1&apiKey=7a9294b43ce64bf3b1a16d5b5a185676`
      );
      setPosts(response.data.articles);
    };

    fetchPosts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BlogPostList posts={posts} />} />
          <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
