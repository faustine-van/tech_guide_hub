import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import MainPage from './Components/Home/MainPage';
import Opportunities from './Components/Opportunities/Opportunities';
import Blog from './Components/Blog/Blog';
import Layout from './Components/Layout';

// css
import './App.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/opportunities",
        element: <Opportunities />,
      },
      {
        path: "/blogs/entire-article-collections",
        element: <Blog />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />
}
export default App
