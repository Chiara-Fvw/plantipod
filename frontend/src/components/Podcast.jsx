import React, { useEffect, useState } from "react";

function formatDuration(duration) {
  if (!duration) return "00:00:00";

  const hh = String(duration.hours || 0).padStart(2, '0');
  const mm = String(duration.minutes || 0).padStart(2, '0');
  const ss = String(duration.seconds || 0).padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}

const PodcastRight = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/podcasts')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch episodes.");
        return res.json();
      })
      .then((data) => {
        console.log("Episodes data:", data);

        setEpisodes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }, []);

    if (loading) return (<div className="flex justify-center items-center h-full"> Loading ... </div>)
    if (error) return (<div className="flex justify-center items-center h-full text-red-500"> Error: {error}</div>);

  return (
    <div className="flex-1 flex justify-center items-start p-6 overflow-auto">
      <div className="w-full max-w-md my-auto">
        <ul className="w-full max-w-md space-y-4 text-lg">
          {episodes.map(({id, episode_num, title, duration }) => (
          <li key={id} className="flex justify-between border-b border-gray-300 pb-2 group relative transition-all duration-300">
            <a 
              href="/under-construction.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full">
                <span>{episode_num}.</span>
                {/* Title text */}
                <span className="flex-1 mx-2 truncate relative">
                  <span className="block group-hover:opacity-0 transition-opacity duration-300">{title}</span>
                  <span className="absolute inset-0 font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ellipsis whitespace-nowrap overflow-hidden"> Listen on Spotify → </span>
                </span>
                <span>{formatDuration(duration)}</span>
            </a>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PodcastRight;