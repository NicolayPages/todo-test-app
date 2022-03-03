import React from 'react';
import Welcome from "../pages/Welcome/Welcome";

const Todo = React.lazy(() => import('../pages/Todo/Todo'))

export const publicRoutes = [
    { path: '/', element: <Welcome /> },
    { path: '/todo', element: <Todo /> },
]
