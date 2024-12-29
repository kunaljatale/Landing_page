import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Route, Router, RouterProvider,createBrowserRouter} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen.jsx';
import AboutScreen from './Screens/AboutScreen.jsx';
import ContactScreen from './Screens/Contact.jsx';
import HelpScreen from './Screens/HelpScreen.jsx';
import BlogScreen from './Screens/Blogscreen.jsx';
import MainScreen from './Component/MainScreen.jsx';
import SectionScreen from './Component/SectionsScreen.jsx';

const router=createBrowserRouter([


  {path:'/',element: <App/>,},

  {path:'/home', element:<MainScreen/> },
  {path:'/about', element:<AboutScreen/> },{path:'/contact', element:<ContactScreen/> },


 

   
  {path:'/blog', element:<BlogScreen/> },
  {path:'/help', element:<HelpScreen/> },
   

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
  <RouterProvider router={router} />
  </StrictMode>,
);
