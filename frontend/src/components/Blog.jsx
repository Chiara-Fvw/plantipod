import React, { useEffect, useState } from "react";

const Post = ({data}) => {
      console.log(data.image_url);
  return (
    <div className="mb-4 break-inside-avoid rounded overflow-hidden shadow-lg"
        style={{ backgroundImage: `url('http://localhost:3001/${data.image_url}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white opacity-80 p-4 ">
        <h1 className="text-lg font-semibold mb-2">{data.title}</h1>
        <p>{new Date(data.created_at).toLocaleDateString()}</p>
        <button className="mt-2 inline-block px-4 py-2 bg-main text-white rounded hover:bg-secondary"> Read → </button>
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
    <div className="md:w-1/2 w-full flex flex-col md:h-full">
              <div><p>Filtering goes here</p></div>
      <div className="min-h-[250px] md:min-h-0 md:flex-1 flex">
        <div className="columns-2 gap-4">
          {posts.map((postData) => (
            <Post key={postData.id} data={postData} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlogRight;