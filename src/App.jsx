import React  from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';

export default function App() {
  let routes = createBrowserRouter([{
    path:"", element:<Layout />,children:[
      {index:true, element:<Home/>},
   {path:"about", element: <About /> },
   {path:"contact", element: <Contact /> },
   {path:"portfolio", element: <Portfolio />} ,

   {path:"*", element: <NotFound/> },
 ]
}])

  return (
    <>
<RouterProvider router={routes}  ></RouterProvider>
   </>
  )
}



