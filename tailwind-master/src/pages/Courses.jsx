import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseServices";

function Courses ()
{
    const [ courses, setCourses ] = useState( [] );
    async function loadCourses ()
    {
        try
        {
            const data = await getAllCourses();
            setCourses( data )
        } catch
        {
            console.error( "not found" );
        }
    }
    useEffect( () =>
    {
        loadCourses();
    }, [] )
    return (
<div className="min-h-screen bg-white p-10">
  <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 font-serif italic">
    Programming Courses
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {courses.map(course => (
      <div
        key={course.id}
        className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1"
      >
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-serif italic font-semibold text-gray-800">
            {course.title}
          </h2>
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700 italic">
            {course.level}
          </span>
        </div>
        <div className="p-6 text-gray-700">
          <p className="mb-4 italic">{course.desc}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>ID: {course.id}</span>
            <span>Lessons: {course.lession}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    )
}

export default Courses

