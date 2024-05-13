import { Navigate, createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/Main";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Categories from "../pages/Home/Categories/Categories";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Terms from "../pages/Login/Terms/Terms";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout/>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'terms&condition',
        element:<Terms/>
      }
    ]
  },
    {
      path: "category",
      element: <Main/>,
      children:[
        // {
        //     path:'/',
        //     // element:<Navigate to="/categories/0"></Navigate>,
        //     element:<Categories/>,
        //     loader:()=>fetch('http://localhost:5000/news')
        // },
        {
          path:':id',
          element:<Categories/>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
        
      ]
    },
    {
      path:'news',
      element:<NewsLayout/>,
      children:[{
        path:':id',
        element:<PrivateRoutes><News/></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)

      }]
    }
  ]);

  export default router;


