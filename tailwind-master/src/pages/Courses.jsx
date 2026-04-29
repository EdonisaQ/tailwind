import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseServices";
import CourseCard from "../components/CourseCard";

function Courses ()
{
  const [ courses, setCourses ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( "" );

  useEffect( () =>
  {
    getAllCourses()
      .then( ( data ) =>
      {
        setCourses( data );
      } )
      .catch( () =>
      {
        setError( "Issue with data" );
      } )
      .finally( () =>
      {
        setLoading( false );
      } );
  }, [] );

  if ( loading ) return <div>Loading...</div>;
  if ( error ) return <div>{ error }</div>;

  return (
    <div className=" bg-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 font-serif italic">
        Programming Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        { courses.map( ( course ) => (
          <CourseCard key={ course.id } course={ course } />
        ) ) }
      </div>
    </div>
  );
}

export default Courses;
