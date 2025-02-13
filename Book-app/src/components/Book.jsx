import  "./style.css"

function Book(props){
    return (
        <>
            <div className="book-card">
                <img src={props.Bookdetails.coverImageUrl} alt="" height="250px" width="200px" className="book-cover" />
                <div className="book-details">
                    <h2 className="book-title" >{props.Bookdetails.title}</h2>
                    <p className="book-author" >{props.Bookdetails.author}</p>
                    <p className="book-description" >{props.Bookdetails.description}</p>
                </div>
            </div>
        </>
    )
}

export default Book;