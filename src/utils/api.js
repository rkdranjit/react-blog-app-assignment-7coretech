// src/utils/api.js
import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "7a9294b43ce64bf3b1a16d5b5a185676";

export const fetchPosts = async (query = "technology", page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};
