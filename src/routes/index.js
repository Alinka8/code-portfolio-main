import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import SimpleLayout from '../layouts/simple';
import CompactLayout from '../layouts/compact';
//
import {
  // E-Learning

  ElearningLandingPage,

  // Common
  Page404,
  Page500,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Simple layout
    {
      element: <SimpleLayout />,
      children: [
        {
          // Set an empty path to match the root URL
          path: '',
          element: <ElearningLandingPage />,
        },
      ],
    },
    // Compact layout
    {
      element: <CompactLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '*', element: <Navigate to="" replace /> },
  ]);
}
