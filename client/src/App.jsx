import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import MainPage from './Components/Home/MainPage';
import Opportunities from './Components/Opportunities/Opportunities';
import Blog from './Components/Blog/Blog';
import ArticleDetail from './Components/Blog/ArticleDetail';
import Events from './Components/Events/Events';


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
        path: "/events",
        element: <Events />,
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
        path: "/blogs/articles-detail",
        element: <ArticleDetail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />
}
export default App
