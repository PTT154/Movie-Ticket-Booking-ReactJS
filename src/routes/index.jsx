import React, { lazy } from 'react';
import { Route } from "react-router-dom";

const routes = [
    {
        path: "",
        element: lazy(() => import("../pages/User")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../pages/User/Home/Home")),
            },
            {
                path: "movies",
                element: lazy(() => import("../pages/User/Movies/Movies")),
            },
            {
                path: "showtimes",
                element: lazy(() => import("../pages/User/Showtimes/Showtimes")),
            },
            {
                path: "movie-detail/:id",
                element: lazy(() => import("../pages/User/MovieDetail/MovieDetail")),
            },
            {
                path: "news",
                element: lazy(() => import("../pages/User/News/News")),
            },
            {
                path: "contact",
                element: lazy(() => import("../pages/User/Contact/Contact")),
            }
        ]
    },
    {
        path: "admin",
        element: lazy(() => import("../pages/Admin")),
        nested: [
            {
                path: "dashboard",
                element: lazy(() => import("../pages/Admin/Dashboard/Dashboard")),
            },
            {
                path: "add-user",
                element: lazy(() => import("../pages/Admin/UserManager/UserManager")),
            },
        ],
    },
    {
        path: "*",
        element: lazy(() => import("../pages/PageNotFound/PageNotFound")),
    },
];

const renderRoute = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    // Sử dụng React.createElement chứ không dùng <route.element /> 
                    // vì đây không phải cách đúng, React sẽ coi đó là một component tên là "route.element", 
                    // không phải giá trị của biến route.element/ 
                    // Dù code vẫn chạy đúng nhưng có thể sẽ có lỗi không mong muốn xảy ra 
                    // trong những trường hợp phức tạp hơn.
                    element={React.createElement(route.element)} >
                    {route.nested.map((nestRoute) => (
                        <Route
                            key={nestRoute.path}
                            path={nestRoute.path}
                            element={React.createElement(nestRoute.element)}>
                        </Route>
                    ))}
                </Route>
            )
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={React.createElement(route.element)} >
                </Route>
            )
        }
    })
};

export default renderRoute;
