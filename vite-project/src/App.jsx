import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./components/style.css";


function App() {
   return (
     <>
      <h1>Book Management Application</h1>
       <div className="Search" >
         <h2>Search Books</h2>
         <div>
         <input type="text" name="" id="" className="search-input" />
         <button>Search</button>
         </div>
       </div>

       <BookList Booksdata={Books} />
     </>
   )
}

export default App
