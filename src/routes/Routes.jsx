import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AllQueriespage from "../pages/AllQueriespage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index:true,
                path: "/",
                element: <HomePage/>
            },
            {
                path:  "/queries",
                element: <AllQueriespage/>
            },
            {
                path: "/about",
                element : <AboutPage/>
            },
            {
                path: "/contact",
                element: <ContactPage/>
            }
        ]
    },
    
]);
