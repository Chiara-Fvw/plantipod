const HomeRight = ({onClick}) => {
  return ( 
    <div className="flex-1 flex flex-col md:h-full">
      {["Blog", "Podcast", "Courses"].map((item) => (
        <div 
          key={item} 
          onClick={() => onClick(item)}
          className="min-h-[250px] md:min-h-0 md:flex-1 flex items-center justify-center bg-cover bg-center relative cursor-pointer group transform transition-transform duration-300 ease-in-out"
          style={{ backgroundImage: `url('/img/${item.toLowerCase()}.png')` }}>
          <div className="relative z-10 bg-white px-6 py-3 group-hover:translate-y-2 transition-all duration-300">
            <h2 className="text-main text-4xl ">{item.toUpperCase()}</h2>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default HomeRight;