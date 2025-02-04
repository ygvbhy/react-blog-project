import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import PostNew from './pages/PostNew';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/posts',
        element: <PostList />,
      },
      {
        path: '/posts/:id',
        element: <PostDetail />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/posts/new',
        element: <PostNew />,
      },
    ],
  },
]);

export default router;
