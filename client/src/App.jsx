import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import MainPage from './Components/Home/MainPage';
import Opportunities from './Components/Opportunities/Opportunities';
import Blog from './Components/Blog/Blog';
import ArticleDetail from './Components/Blog/ArticleDetail';
import Events from './Components/Events/Events';
import Layout from './Components/Layout';
import Event from './Components/Events/Event';
import AboutUs from './Components/AboutUs/AboutUs';



// css
import './App.css';
import Scholarships from './Components/Opportunities/Scholarships';
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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/scholarships",
        element: <Scholarships />,
      },
      {
        path: "/opportunities",
        element: <Opportunities />,
      },
      {
        path: "/blogs/entire-article-collections",
        element: <Blog />,
      },
      {
        path: "/blogs/article-detail",
        element: <ArticleDetail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />
}
export default App
