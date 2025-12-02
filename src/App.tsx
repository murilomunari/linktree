import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Networks } from "./pages/networks";
import { Login } from "./pages/login";

import { Private } from "./routes/private";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin",
        element: <Private><Admin /></Private>
    },
    {
        path: "/admin/social",
        element: <Networks />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export { router }