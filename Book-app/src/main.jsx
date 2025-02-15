import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Creatte Routing Configuration 

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <Error />
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path : "/contact",
    element: <Contact/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
