

import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./components/style.css";
import Header from "./components/Header";
import { useState } from "react";


function App() {

  const [searchText,setSearchText] = useState("")
  const [filteredBooks,setFilteredBooks] = useState(Books)

  function handleChange(){
      const filterBooks =  Books.filter( (book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
      console.log("filteredBooks",filteredBooks);

      setFilteredBooks(filterBooks);

  }


   return (
     <>
      {/* <h1>Book Management App</h1> */}
      <Header/>
       <div className="search" >
         <h2>Search Books</h2>
         <div>

           <input type="text" name="" id=""
             className="search-input"
             onChange={ (e) => setSearchText(e.target.value)} />

         <button onClick={handleChange} >Search</button>

         </div>
       </div>
       <BookList Booksdata={filteredBooks} />
     </>
   )
}

export default App;






// import BookList from "./components/BookList";
// import { Books } from "./utils/mockData";
// import "./components/style.css";
// import Header from "./components/Header";
// import { useState } from "react";
// import { Outlet } from "react-router-dom";


// function App() {
//    return (
//      <>

//       <Header />
//      <Outlet/>
//      </>
//    )
// };

// export default App;


// import BookList from "./components/BookList";
// import { Books } from "./utils/mockData";
// import "./components/style.css";
// import Header from "./components/Header";
// import { useState } from "react";


// function App() {

//   const [searchText,setSearchText] = useState("")
//   const [filteredBooks,setFilteredBooks] = useState(Books)

//   function handleChange(){
//       const filterBooks =  Books.filter( (book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
//       console.log("filteredBooks",filteredBooks);

//       setFilteredBooks(filterBooks);

//   }


//    return (
//      <>
//       {/* <h1>Book Management App</h1> */}
//       <Header />
//        <div className="search" >
//          <h2>Search Books</h2>
//          <div>

//            <input type="text" name="" id=""
//              className="search-input"
//              onChange={ (e) => setSearchText(e.target.value)} />

//          <button onClick={handleChange} >Search</button>

//          </div>
//        </div>
//        <BookList Booksdata={filteredBooks} />
//      </>
//    )
// }

// export default App;
