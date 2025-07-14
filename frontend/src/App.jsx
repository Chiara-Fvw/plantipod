import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import HomeRight from "./components/Home.jsx";
import BlogRight from "./components/Blog.jsx";
import CoursesRight from "./components/Courses.jsx";
import PodcastRight from "./components/Podcast.jsx";
import LeftContent from "./components/LeftContent.jsx";
import Post from "./components/Post.jsx";
import { useState } from 'react';

const App = () => {
  const location = useLocation();
  const isPostRoute = location.pathname.startsWith('/blog/');
  const [postMetadata, setPostMetadata] = useState(null);

  const section = !isPostRoute 
    ? location.pathname === "/" ? "home" : location.pathname.slice(1) 
    : null;


  return (
    <main className="flex flex-col md:h-screen">
      {/* FULL PAGE CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row md:h-full overflow-auto md:overflow-hidden">

        {/* LEFT SIDE: NAV + TITLE */}
        <div className="md:w-1/2 w-full flex flex-col">
          
          {/* NAVIGATION BUTTONS (Top 4) */}
          <div className="flex w-full pt-1">
            <Link to="/" className="nav-button">
              <img src="/img/logo2.png" className="max-w-[100px]"/>
            </Link>
            <Link to="/blog" className="nav-button">
              <img src="/img/iconBlog.png" className="max-w-[50px]"/>
            </Link>
            <Link to="/podcast" className="nav-button">
              <img src="/img/iconPodcast.png" className="max-w-[50px]"/>
            </Link>
            <Link to="/courses" className="nav-button">
              <img src="/img/iconCourse.png" className="max-w-[50px]"/>
            </Link>
          </div>

          {/* TITLE + DESCRIPTION */}
          <LeftContent 
            section={section} 
            postMetadata={postMetadata}
          />
        </div>

      {/* RIGHT SIDE ROUTING */}
      <Routes>
        <Route path="/" element={<HomeRight />} />
        <Route path="/blog" element={<BlogRight />} />
        <Route path="/blog/:id" element={<Post setPostMetadata={setPostMetadata}/>} />
        <Route path="/podcast" element={<PodcastRight />} />
        <Route path="/courses" element={<CoursesRight />} />
        <Route path="*" element={<HomeRight />} />
      </Routes>

      </div>

      {/* BOTTOM CTA */}
      <div
        className="h-[80px] w-full py-6 flex items-center bg-main text-light text-xl font-semibold">
        {/* Instagram */}
          <a 
            href="/under-construction.html"
            target="_blank"
            className="w-[80px] flex justify-center items-center border-r border-secondary">
            <img src="/img/instagram.png" className="w-8 h-8 hover:translate-2 transition-all duration-300" alt="Instagram" />
          </a>
        {/* Pinterest */}
        <a 
          href="/under-construction.html"
          target="_blank"
          className="w-[80px] flex justify-center items-center border-r border-secondary">
          <img src="/img/pinterest.png" className="w-8 h-8 hover:translate-2 transition-all duration-300" alt="Pinterest" />
        </a>
        {/* Join the Community */}
         <a  
          href="/under-construction.html"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-6 group cursor-pointer ">
          <img src="/img/iconCommunity.png" alt="Community" className="max-w-[40px]"/>
          <span>Join the Community</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2"> → </span>
         </a>
      </div>
    </main>
  );
}

export default App;
