import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from '../../routes/routes';

const AppRouter: React.FC = React.memo(() => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element} />
                )}
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
})

export default AppRouter;
