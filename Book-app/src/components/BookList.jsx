
import Book  from "./Book"
import  "./style.css"


function BookList(props){

    return (
        <>
            <div className="bookList" >

            {props.Booksdata.map((data) => (
                <Book key={data.bookId} Bookdetails={data} > </Book>
            ))}

            </div>
        </>
    )
}

export default BookList;




{/*  for one book - <Book Bookdetails= { props.Booksdata[0]}/> */}


// with search functionality 

// import Book  from "./Book"
// import  "./style.css"


// function BookList(props){

//     return (
//         <>
//             <div className="bookList" >

//             {props.Booksdata.map((data) => (
//                 <Book key={data.bookId} Bookdetails={data} > </Book>
//             ))}

//             </div>
//         </>
//     )
// }

// export default BookList;

