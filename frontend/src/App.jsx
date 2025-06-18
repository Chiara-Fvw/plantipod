const App = () => {
  const handleClick = (section) => {
    alert(`You clicked on ${section}`);
  }
  return (
    <main>
      <h1 className="text-3xl font-bold text-green-600">🌿 PlantiPod</h1>
      
      <p>
        PlantiPod is your digital garden: discover helpful blog posts, practical courses, and mindful podcasts to nurture your plants and your soul.
      </p>

      <section className='landing-card-container'>
        <div className='landing-card' onClick={() => handleClick('Blog')} style={{ cursor: 'pointer' }}>
          📝 Blog
        </div>
        <div className='landing-card' onClick={() => handleClick('Courses')} style={{ cursor: 'pointer' }}>
          🎓 Courses
        </div>
        <div className='landing-card' onClick={() => handleClick('Podcast')} style={{ cursor: 'pointer' }}>
          🎧 Podcast
        </div>
      </section>
    </main>
  )
}

export default App;
