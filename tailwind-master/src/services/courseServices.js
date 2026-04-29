const API_URL = "http://localhost:3000/courses";

export async function getAllCourses ()
{
    const response = await fetch( API_URL )
    return response.json();
}