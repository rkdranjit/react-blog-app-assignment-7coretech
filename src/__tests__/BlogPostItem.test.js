import { render, screen } from '@testing-library/react';
import BlogPostItem from '../components/BlogPostItem';
import { MemoryRouter } from 'react-router-dom';

const mockPost = {
  title: "Sample Post",
  description: "This is a sample post",
  urlToImage: "https://via.placeholder.com/150",
  publishedAt: "2024-07-20T12:00:00Z",
  url: "https://example.com/post"
};

test('renders blog post item', () => {
  render(
    <MemoryRouter>
      <BlogPostItem post={mockPost} index={0} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Sample Post/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a sample post/i)).toBeInTheDocument();
});
