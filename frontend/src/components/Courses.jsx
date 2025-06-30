import React, { useEffect, useState } from "react";

const Course = ({data}) => {
  return (
    <a 
      href="/under-construction.html"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-4/5 shadow-sm overflow-hidden mx-auto border border-light">
      <div className="p-4 text-xl font-bold text-center border-b border-light bg-white">
        {data.title}
      </div>
      <div className="grid grid-cols-2">
        <div className="h-48">
          <img src={`http://localhost:3001${data.img}`} alt={data.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex items-center justify-center text-gray-700 text-sm bg-white relative">
          <p> { data.description } </p>
          {/* Hover text */}
          <div className="absolute bottom-2 right-2 text-green-700 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            visit course →
          </div>
        </div>
      </div>
    </a>
  )
}

const CoursesRight = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/courses')
      .then(res => {
        if(!res.ok) throw new Error('Failed to fetch courses.');
        return res.json();
      })
      .then(data => setCourses(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="md:w-1/2 w-full overflow-y-auto px-4 py-6">
      <div className="flex flex-col gap-6">
        {courses.map((courseData) => (<Course key={courseData.id} data={courseData}/>))}
      </div>
    </div>
  );
}

export default CoursesRight;