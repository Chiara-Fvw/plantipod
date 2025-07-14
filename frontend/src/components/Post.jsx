import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const Post = ({ setPostMetadata }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/blog/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setPostMetadata({
          title: data.title,
          description: (
            <>
              <p>Published: {new Date(data.created_at).toLocaleDateString()}</p>
              {/* If tags exist, show them */}
              {data.tags && (
                <p>Tags: {data.tags.map(tag => `#${tag}`).join(', ')}</p>
              )}
            </>
          )
        })
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch post:", err);
        setLoading(false);
        setPostMetadata(null);
      })
  }, [id, setPostMetadata]);

  if (loading) return <div className="flex-1 flex items-center justify-center">Loading...</div>;
  if (!post) return <div className="flex-1 flex items-center justify-center">Post not found</div>;

  return (
    <div className="md:w-1/2 w-full overflow-y-auto px-4 py-6">
      <div className="prose max-w-none text-gray-700">
        {post.content}
      </div>
    </div>
  );
}

export default Post;