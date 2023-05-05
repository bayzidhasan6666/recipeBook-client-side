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
import Leaflet from '../Pages/Leaflet/Leaflet';
import AboutUs from '../Pages/AboutUs/AboutUs';
import UserProfile from '../Pages/UserProfile/UserProfile';

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
          fetch(
            'https://b7a10-chef-recipe-hunter-server-side-bayzidhasan6666.vercel.app/chefs'
          ).then((res) => res.json()),
      },
      {
        path: '/recipes/:id',
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-bayzidhasan6666.vercel.app/chefs/${params.id}`
          ).then((res) => res.json()),
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
      {
        path: '/leaflet',
        element: <Leaflet></Leaflet>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
