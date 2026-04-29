const API_URL = "http://localhost:3000/courses";

export const getAllCourses = () =>
{
    return fetch( API_URL ).then( ( response ) =>
    {
        if ( !response.ok )
        {
            throw new Error( "could not found the courses" );
        }
        return response.json();
    } )
}
export const getCourseById = ( courseId ) =>
{
    return fetch( `${ API_URL }/${ courseId }` ).then( ( response ) =>
    {
        if ( !response.ok )
        {
            throw new Error( "could not find this course" );
        }
        return response.json();
    } );

}
