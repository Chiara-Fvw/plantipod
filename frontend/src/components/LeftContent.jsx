const LeftContent = ({ section }) => {
  // You can define titles and descriptions in an object:
  const contentMap = {
    Home: {
      title: "Welcome",
      description: (
        <>
          <p>
            <span className="font-name">Plantipod</span> is your all-in-one hub for everything your plants may need. Dive into our Spotify podcasts, explore Hotmart courses, and get inspired by the blog — all in one easy spot.
          </p>
          <p>Join our vibrant community to connect, share, and grow with fellow plant lovers.</p>
        </>
      ),
    },
    Blog: {
      title: "Blog",
      description: (
        <>
        <p>Let's read about greens!</p>
        <p>A blog full of fascinating plant curiosities, handy tips, and much more.</p>
        </>
      ),
    },
    Podcast: {
      title: "Podcast",
      description: (
        <>
        <p>Let's talk about greens!</p>
        <p>Our podcast releases offer a wealth of knowledge where you can discover many plants and learn valuable care tips.</p>
        </>
      ),
    },
    Courses: {
      title: "Courses",
      description: (
        <>
        <p>Let's study green!</p>
        <p>Explore all our courses — available on Hotmart to help you grow your plant knowledge.</p>
        </>
      ),
    },
  };

  const { title, description } = contentMap[section] || contentMap.Home;

  return (
    <div className="flex-1 min-h-[300px] md:min-h-0 flex items-center justify-center px-6 py-8 md:py-2 text-center">
      <div>
        <h1 className="text-6xl font-name text-main mb-[10vh]">{title}</h1>
        <div className="mt-4 text-lg text-gray-600">{description}</div>
      </div>
    </div>
  );
};

export default LeftContent;
