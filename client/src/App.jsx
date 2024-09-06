import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout and Pages
import Layout from './Components/Layout';
import MainPage from './Components/Home/MainPage';
import Resources from './Components/Resources/Resources';
import Blog from './Components/Blog/Blog';
import ArticleDetail from './Components/Blog/ArticleDetail';
import Events from './Components/Events/Events';
import Event from './Components/Events/Event';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/AboutUs/ContactUs';
import Scholarships from './Components/Resources/Scholarships';
import Signup, { Signin } from './Components/Login_signup/Signup';
import { ProfileList } from './Components/Resources/ProfileList';
import ProfilePage, {profiles} from './Components/Resources/ProfilePage';


// Dashboard Components
import Dashboard from './Components/Dashboard/Dashboard';
import Settings from './Components/Dashboard/Settings';
import CreatePost from './Components/Dashboard/CreatePost';
import ManageUsers, { UsersOverview } from './Components/Dashboard/User/ManageUsers';
import Overview from './Components/Dashboard/Overview';
import Profile from './Components/Dashboard/User/Profile';
import Notifications from './Components/Dashboard/Notifications';
import ManageBlogs from './Components/Dashboard/ManageBlogs';
import CreateUser, { EditUser } from './Components/Dashboard/User/CreateUser';
import ManageResources, { ResourcesOverview } from './Components/Dashboard/Resources/ManageResources';
import CreateResourcesForm, { EditResourcesForm } from './Components/Dashboard/Resources/CreateResourcesForm';

// CSS
import './App.css';


const mentorList = [
  {
    "id": "1",
    "name": "Jane Doe",
    "specialization": "Full Stack Developer",
    "bio": "Jane is a seasoned full stack developer with over 10 years of experience in building scalable web applications.",
    "profileImage": "https://example.com/images/jane_doe.jpg",
    "contactEmail": "jane.doe@example.com",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/janedoe",
      "github": "https://github.com/janedoe",
      "twitter": "https://twitter.com/janedoe"
    },
    "availableSlots": [
      "Monday 10am-12pm",
      "Wednesday 2pm-4pm",
      "Friday 9am-11am"
    ]
  },
  {
    "id": "2",
    "name": "John Smith",
    "specialization": "Data Scientist",
    "bio": "John specializes in data science and machine learning with a passion for teaching and mentoring new talent.",
    "profileImage": "https://example.com/images/john_smith.jpg",
    "contactEmail": "john.smith@example.com",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/johnsmith",
      "github": "https://github.com/johnsmith",
      "twitter": "https://twitter.com/johnsmith"
    },
    "availableSlots": [
      "Tuesday 1pm-3pm",
      "Thursday 10am-12pm"
    ]
  },
  {
    "id": "3",
    "name": "Emily Johnson",
    "specialization": "UX/UI Designer",
    "bio": "Emily has a strong background in UX/UI design and is passionate about creating user-friendly interfaces.",
    "profileImage": "https://example.com/images/emily_johnson.jpg",
    "contactEmail": "emily.johnson@example.com",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/emilyjohnson",
      "dribbble": "https://dribbble.com/emilyjohnson",
      "twitter": "https://twitter.com/emilyjohnson"
    },
    "availableSlots": [
      "Monday 3pm-5pm",
      "Wednesday 11am-1pm",
      "Friday 2pm-4pm"
    ]
  },
  {
    "id": "4",
    "name": "Michael Brown",
    "specialization": "DevOps Engineer",
    "bio": "Michael is a DevOps engineer with a strong focus on cloud infrastructure and automation.",
    "profileImage": "https://example.com/images/michael_brown.jpg",
    "contactEmail": "michael.brown@example.com",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/michaelbrown",
      "github": "https://github.com/michaelbrown",
      "twitter": "https://twitter.com/michaelbrown"
    },
    "availableSlots": [
      "Tuesday 9am-11am",
      "Thursday 1pm-3pm"
    ]
  }
]


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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:eventId",
        element: <Event />,
      },
      {
        path: "/scholarships",
        element: <Scholarships />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/resources/:id",
        element: <ProfileList profiles={profiles} />,
      },
      {
        path: "/blogs/entire-article-collections",
        element: <Blog />,
      },
      {
        path: "/blogs/article-detail",
        element: <ArticleDetail />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage profiles={profiles} />,
      },
    
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '', /* default route */
        element: <Overview />,
      },
      {
        path: 'my-profile',
        element: <Profile />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'create-post',
        element: <CreatePost />,
      },
      {
        path: 'manage-posts',
        element: <ManageBlogs />,
      },
      {
        path: 'manage-users',
        element: <ManageUsers />,
        children: [
          {
            path: '', // Default route
            element: <UsersOverview />,
          },
          {
            path: 'create-user',
            element: <CreateUser />,
          },
          {
            path: 'edit-user/:userId', // Page for editing a specific user
            element: <EditUser />,
          },
        ],
      },
      {
        path: 'manage-resources',
        element: <ManageResources />,
        children: [
          {
            path: '', // Default route
            element: <ResourcesOverview />,
          },
          {
            path: 'create-resource',
            element: <CreateResourcesForm />,
          },
          {
            path: 'edit-resource',
            element: <EditResourcesForm />,
          },
        ],
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
