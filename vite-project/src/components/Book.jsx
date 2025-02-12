

function Book(props){
    return (
        <>
        <img src={props.Bookdetails.coverImageUrl} alt=""  height="250px" width="200px" />
        <div>
            <h2>{props.Bookdetails.title}</h2>
            <p>{props.Bookdetails.author}</p>
            <p>{props.Bookdetails.description}</p>   
        </div>
        </>
    )
}

export default Book;