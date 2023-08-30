import { createBrowserRouter } from 'react-router-dom';
import IssueListPage from '../pages/IssueListPage';
import NotFoundPage from '../pages/NotFoundPage';
import App from '../App';
import IssueDetailPage from '../pages/IssueDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <IssueListPage />,
      },
      {
        path: '/detail/:id',
        element: <IssueDetailPage />,
      },
    ],
  },
]);

export default router;
