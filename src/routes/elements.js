import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// E-LEARNING
export const ElearningAboutPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningAboutPage'))
);

export const ElearningContactPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningContactPage'))
);
export const ElearningCoursePage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningCoursePage'))
);
export const ElearningCoursesPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningCoursesPage'))
);
export const ElearningLandingPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningLandingPage'))
);

export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
