import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Post = ({ setPostMetadata }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/blog/${id}`)
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
      {post.images?.[0] && (
        <img 
          src={post.images[0].url.startsWith('http') ? post.images[0].url : `${API_URL}${post.images[0].url}`} 
          alt={post.images[0].alt_text} 
          className="w-full h-auto mb-6 rounded-lg shadow-md" 
        />
      )}
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {post.images?.slice(1).map((img, i) => (
        <img 
          key={i}
          src={img.url.startsWith('http') ? img.url : `${API_URL}${img.url}`}
          alt={img.alt_text}
          className="my-6 w-full rounded-md shadow"
        />
      ))}
    </div>
  );
}

export default Post;