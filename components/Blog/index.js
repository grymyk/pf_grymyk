import BlogPreview from "./BlogPreview";

export default function Blog({ posts }) {
    const mostRecentBlog = posts[0];
    const recentBlog = posts.slice(1, 3);

    return (
        <BlogPreview
            mostRecentBlog = {mostRecentBlog}
            recentBlog = {recentBlog}
        />
    )
}