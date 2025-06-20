const App = () => {
  const handleClick = (section) => {
    alert(`You clicked on ${section}`);
  }
  return (
    <main className="min-h-screen flex flex-col">

      {/* FULL PAGE CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row">

        {/* LEFT SIDE: NAV + TITLE */}
        <div className="md:w-1/2 w-full flex flex-col">
          
          {/* NAVIGATION BUTTONS (Top 4) */}
          <div className="flex w-full">
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

          {/* TITLE + SLOGAN */}
          <div className="flex-1 min-h-[300px] md:min-h-0 flex items-center justify-center p-6 bg-white text-center">
            <div>
              <h1 className="text-6xl font-name text-main">Welcome</h1>
              <p className="mt-4 text-lg text-gray-600"> <span className="font-name">Plantipod</span> is your all-in-one hub for everything Plantipod. Dive into our Spotify podcasts, explore Hotmart courses, and get inspired by the blog — all in one easy spot.</p>
              <p className="mt-4 text-lg text-gray-600">Join our vibrant community to connect, share, and grow with fellow plant lovers. lovers</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: MAIN SECTIONS */}
        <div className="md:w-1/2 w-full flex flex-col flex-1">
          {["Blog", "Podcast", "Courses"].map((item) => (
            <div
              key={item}
              onClick={() => handleClick(item)}
              className="flex-1 min-h-[250px] flex items-center justify-center bg-cover bg-center relative cursor-pointer group"
              style={{ backgroundImage: `url('/img/${item.toLowerCase()}.png')` }}
            >
              <div className="absolute inset-0 bg-main opacity-10 group-hover:opacity-60 transition duration-300"></div>
              <h2 className="relative z-10 text-white text-4xl">{item.toUpperCase()}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <button
        onClick={() => handleClick("Community")}
        className="w-full py-6 text-xl font-semibold text-white bg-main hover:bg-[#39592F] transition"
      >
        Join the Community →
      </button>
    </main>
  );
}

export default App;
