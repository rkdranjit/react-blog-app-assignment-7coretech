import { render, screen, waitFor } from '@testing-library/react';
import BlogPostList from '../components/BlogPostList';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const mockPosts = [
  {
    title: "Sample Post 1",
    description: "This is a sample post",
    urlToImage: "https://via.placeholder.com/150",
    publishedAt: "2024-07-20T12:00:00Z",
    url: "https://example.com/post1"
  },
  // Add more mock posts if needed
];

test('renders blog posts and pagination', async () => {
  mock.onGet('https://newsapi.org/v2/everything?q=technology&page=1&apiKey=7a9294b43ce64bf3b1a16d5b5a185676').reply(200, { articles: mockPosts });

  render(
    <MemoryRouter>
      <BlogPostList />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/Sample Post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a sample post/i)).toBeInTheDocument();
  });
});
