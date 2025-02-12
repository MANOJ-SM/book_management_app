import BookList from "./components/BookList";
import { Books } from "./utils/mockData";


function App() {
   return (
    <>
    <h1>book management application</h1>
    <BookList Booksdata = { Books }/>
    </>
   )
}

export default App
