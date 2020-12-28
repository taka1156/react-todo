import React from 'react';
import { Route } from 'src/types/index';
import Help from '../pages/Help/help';
import Todo from '../pages/Todo/todo';

const routes: Route[] = [
  {
    path: '/',
    exact: true,
    children: <Help />,
  },
  {
    path: '/todo',
    children: <Todo />,
  },
];

export default routes;
