import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';
import Register from '../Pages/Register/Register';
import Recipes from '../Pages/Recipes/Recipes';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import MenuItems from '../Pages/OurMenu/MenuItems';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: 'loader',
        element: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: '/menu',
        element: <MenuItems></MenuItems>,
        loader: () =>
          fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      },
    ],
  },
]);
export default router;
