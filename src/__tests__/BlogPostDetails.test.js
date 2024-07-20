import { render, screen } from "@testing-library/react";
import BlogPostDetails from "../components/BlogPostDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockPosts = [
  {
    title: "Sample Post",
    content: "This is the full content of the sample post.",
    urlToImage: "https://via.placeholder.com/150",
    publishedAt: "2024-07-20T12:00:00Z",
    url: "https://example.com/post",
  },
];

test("renders blog post details", () => {
  render(
    <MemoryRouter initialEntries={["/post/0"]}>
      <Routes>
        <Route
          path="/post/:id"
          element={<BlogPostDetails posts={mockPosts} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Sample Post/i)).toBeInTheDocument();
  expect(
    screen.getByText(/This is the full content of the sample post./i)
  ).toBeInTheDocument();
});
