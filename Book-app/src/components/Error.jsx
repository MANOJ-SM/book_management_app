import { useRouteError } from "react-router-dom";




function Error(){
    const err = useRouteError();
    console.log(err);

    return (
        <>
         <h1>oops!! plz Enter correct path</h1>
         <h2>{err.status}   {err.statusText}</h2> 
         <p>{err.statusText}</p>
         <p>{err.data}</p>
        </>
    )
};


export default Error;