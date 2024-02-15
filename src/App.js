import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },{
    path: '/about',
    element: <About />
  },{
    path: '*',
    element: <NotFound />
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App;