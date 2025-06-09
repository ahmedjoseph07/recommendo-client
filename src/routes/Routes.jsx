import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AllQueriespage from "../pages/AllQueriespage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import TermsPage from "../pages/TermsPage";
import PolicyPage from "../pages/PolicyPage";
import RecommendationsPage from "../pages/RecommendationsPage";
import MyQueriesPage from "../pages/MyQueriesPage";
import MyRecommendationsPage from "../pages/MyRecommendationsPage";

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
                path: "/recommendations-for-me",
                element:<RecommendationsPage/>
            },
            {
                path:"/my-queries",
                element:<MyQueriesPage/>
            },
            {
                path:"/my-recommendations",
                element:<MyRecommendationsPage/>
            },
            {
                path: "/about",
                element : <AboutPage/>
            },
            {
                path: "/contact",
                element: <ContactPage/>
            },
            {
                path: '/terms',
                element: <TermsPage/>
            },
            {
                path: "/policy",
                element: <PolicyPage/>
            }
        ]
    },
    
]);
