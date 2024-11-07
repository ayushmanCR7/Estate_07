
import HomePage from './routes/homepage/homePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './routes/listpage/lispage';
import { Layout, Requiredlayout } from './routes/layout/layout.jsx';
import SinglePage from './routes/singlepage/singlepage';
import ProfilePage from './routes/profile/profilepage';
import Register from './routes/register/register';
import LoginPage from './routes/loginpage/loginpage';
import ProfileUpdatePage from './routes/profileupdate/profileupdate.jsx';
import AddPost from './routes/addpost/addpost.jsx'
import { singlePageLoader } from './lib/loader.js';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/list",
          element: <ListPage/>
        },
        {
          path:"/:id",
          element: <SinglePage/>,
          loader: singlePageLoader
          
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <LoginPage/>
        }
      ]
    },
    {
      path: "/",
      element: <Requiredlayout/>,
      children:[
        {
          path:"/profile",
          element: <ProfilePage/>
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage/>
        },
        {
          path:"/addpost",
          element: <AddPost/>
        },
      ]
    }
   
  ]);
  return (
    
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
