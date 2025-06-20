import { useState } from "react";
import Blog from "./components/Blog.js";

const App = () => {
  const handleClick = (section) => {
    alert(`You clicked on ${section}`);
  }
  return (
    <main className="flex flex-col md:h-screen">

      {/* FULL PAGE CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row md:h-full overflow-auto md:overflow-hidden">

        {/* LEFT SIDE: NAV + TITLE */}
        <div className="md:w-1/2 w-full flex flex-col">
          
          {/* NAVIGATION BUTTONS (Top 4) */}
          <div className="flex w-full pt-1">
            <button
              onClick={() => handleClick('Home')}
              className="nav-button">
              <img src="/img/logo.png" className="max-w-[100px]"/>
            </button>
            <button
              onClick={() => handleClick('Blog')}
              className="nav-button">
              <img src="/img/iconBlog.png" className="max-w-[50px]"/>
            </button>
            <button
              onClick={() => handleClick('Podcast')}
              className="nav-button">
              <img src="/img/iconPodcast.png" className="max-w-[50px]"/>
            </button>
            <button
              onClick={() => handleClick('Courses')}
              className="nav-button">
              <img src="/img/iconCourse.png" className="max-w-[50px]"/>
            </button>
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="flex-1 min-h-[300px] md:min-h-0 flex items-center justify-center px-6 py-8 md:py-2 text-center">
            <div>
              <h1 className="text-6xl font-name text-main mb-[10vh]">Welcome</h1>
              <p className="mt-4 text-lg text-gray-600"> <span className="font-name">Plantipod</span> is your all-in-one hub for everything your plants may need. Dive into our Spotify podcasts, explore Hotmart courses, and get inspired by the blog — all in one easy spot.</p>
              <p className="mt-4 text-lg text-gray-600">Join our vibrant community to connect, share, and grow with fellow plant lovers.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: MAIN SECTIONS */}
        <div className="md:w-1/2 w-full flex flex-col md:h-full">
          {["Blog", "Podcast", "Courses"].map((item) => (
            <div
              key={item}
              onClick={() => handleClick(item)}
              className="min-h-[250px] md:min-h-0 md:flex-1 flex items-center justify-center bg-cover bg-center relative cursor-pointer group transform transition-transform duration-300 ease-in-out"
              style={{ backgroundImage: `url('/img/${item.toLowerCase()}.png')` }}>
              <div className="relative z-10 bg-white px-6 py-3 rounded-md group-hover:translate-y-2 transition-all duration-300">
                <h2 className="text-main text-4xl ">{item.toUpperCase()}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div
        onClick={() => handleClick("Community")}
        className="h-[80px] w-full py-6 flex items-center bg-main text-light text-xl font-semibold">
        {/* Instagram */}
          <div className="w-[80px] flex justify-center items-center border-r border-secondary">
            <img src="/img/instagram.png" className="w-8 h-8 hover:translate-2 transition-all duration-300" alt="Instagram" />
          </div>
        {/* Pinterest */}
        <div className="w-[80px] flex justify-center items-center border-r border-secondary">
          <img src="/img/pinterest.png" className="w-8 h-8 hover:translate-2 transition-all duration-300" alt="Pinterest" />
        </div>
        {/* Join the Community */}
         <div className="flex-1 flex items-center justify-center gap-2 px-4 py-6 group cursor-pointer ">
          <img src="/img/iconCommunity.png" alt="Community" className="max-w-[40px]"/>
          <span>Join the Community</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2"> → </span>
         </div>
      </div>
    </main>
  );
}

export default App;
