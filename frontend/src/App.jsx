import { useState } from "react";
import HomeRight from "./components/Home.jsx"
import BlogRight from "./components/Blog.jsx";
import CoursesRight from "./components/Courses.jsx";
import PodcastRight from "./components/Podcast.jsx";
import LeftContent from "./components/LeftContent.jsx"

const App = () => {
  const [section, setSection] = useState("Home");
  const handleClick = (newSection) => {
    setSection(newSection);
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
          <LeftContent section={section} />
        </div>

      {/* RIGHT SIDE: MAIN SECTIONS */}
        { section === 'Home' && <HomeRight onClick={handleClick}/>}
        { section === 'Blog' && <BlogRight />}
        { section === 'Courses' && <CoursesRight />}
        { section === 'Podcast' && <PodcastRight />}

      </div>

      {/* BOTTOM CTA */}
      <div
        onClick={() => alert("Community")}
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
