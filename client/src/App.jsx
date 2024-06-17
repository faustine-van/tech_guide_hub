import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import MainPage from './Components/Home/MainPage';
import Opportunities from './Components/Opportunities/Opportunities';
import './App.css';
import Layout from './Components/Layout';
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />
}
export default App
