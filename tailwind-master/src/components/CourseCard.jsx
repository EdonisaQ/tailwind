import React from "react";

function CourseCard ( { course } )
{
    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-serif italic font-semibold text-gray-800">
                    { course.title }
                </h2>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700 italic">
                    { course.level }
                </span>
            </div>
            <div className="p-6 text-gray-700">
                <p className="mb-4 italic">{ course.desc }</p>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>ID: { course.id }</span>
                    <span>Lessons: { course.lesson }</span>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
