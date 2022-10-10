import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Diary = lazy(() => import('./pages/DiaryPage'));
const Report = lazy(() => import('./pages/ReportPage'));
const Weight = lazy(() => import('./pages/WeightPage'));
const Recipe = lazy(() => import('./pages/RecipePage'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: '/', element: <Diary /> },
    { path: '/report', element: <Report /> },
    { path: '/weight', element: <Weight /> },
    { path: '/recipe', element: <Recipe /> },
  ]);

  return routes;
};

export default RouterConfig;
