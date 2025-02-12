import Book  from "./Book"


function BookList(props){

    return (
        <>
            {props.Booksdata.map((data) => (
                <Book Bookdetails={data} > </Book>
            ))}
        </>
    )
}

export default BookList;



{/*  for one book - <Book Bookdetails= { props.Booksdata[0]}/> */}
