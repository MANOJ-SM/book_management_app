import Book  from "./Book"
import  "./style.css"


function BookList(props){

    return (
        <>
            <div className="bookList" >

            {props.Booksdata.map((data) => (
                <Book Bookdetails={data} > </Book>
            ))}

            </div>
        </>
    )
}

export default BookList;



{/*  for one book - <Book Bookdetails= { props.Booksdata[0]}/> */}
