import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';
import Register from '../Pages/Register/Register';
import Recipes from '../Pages/Recipes/Recipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/recipes',
        element: <Recipes></Recipes>,
        loader: () =>
          fetch('http://localhost:5000/chefs').then((res) => res.json()),
      },
      {
        path: '/recipes/:id',
        element: <Recipes></Recipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);
export default router;
