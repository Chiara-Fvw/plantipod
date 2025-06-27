import React, { useEffect, useState } from "react";

const Post = ({data}) => {
  return (
    <div className="relative w-full max-w-md overflow-hidden shadow-lg mb-4 group transition-transform duration-300 hover:scale-[1.02]">
      <img 
        src={`http://localhost:3001/${data.image_url}`} 
        alt="Post thumbnail" 
        className="w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 mx-2 my-1 group-hover:bg-main transition-colors duration-300">
        <p className="text-gray-700 text-center font-medium group-hover:opacity-0 transition-opacity duration-300">{data.title}</p>
        <p className="text-white text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">Read Post →</p>
      </div>
    </div>
  )
}

const BlogRight = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/blog')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch posts.');
        return res.json();        
      })
      .then(data => {
        setPosts(data);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="md:w-1/2 w-full flex flex-col md:h-full mx-6">
              <div><p>Filtering goes here</p></div>
      <div className="min-h-[250px] md:min-h-0 md:flex-1 flex">
        <div className="md:columns-2 gap-4">
          {posts.map((postData) => (
            <Post key={postData.id} data={postData} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlogRight;