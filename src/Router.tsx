import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';

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
    ],
  },
]);

export default router;
