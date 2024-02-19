import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import Search from "../Pages/Search/Search";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },      
      {
        path: "/search",
        element: <Search></Search>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },      
      {
        path: "/products",
        element: <Products></Products>
      },  
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  }
]);

export default myRouter;