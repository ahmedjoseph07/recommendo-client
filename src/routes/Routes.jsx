import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AllQueriespage from "../pages/AllQueriespage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import TermsPage from "../pages/TermsPage";
import PolicyPage from "../pages/PolicyPage";
import RecommendationsPage from "../pages/RecommendedPage";
import MyQueriesPage from "../pages/MyQueriesPage";
import MyRecommendationsPage from "../pages/MyRecommendationsPage";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddQueryPage from "../pages/AddQueryPage";
import QueryDetailsPage from "../pages/QueryDetailsPage";
import MyQueryDetailsPage from "../pages/MyQueryDetailsPage";
import UpdateDetailspage from "../pages/UpdateDetailspage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/queries",
                element: <AllQueriespage />,
            },
            {
                path: "/recommended-for-me",
                element: <RecommendationsPage />,
            },
            {
                path: "/my-queries",
                element: <MyQueriesPage />,
            },
            {
                path: "/my-recommendations",
                element: <MyRecommendationsPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/terms",
                element: <TermsPage />,
            },
            {
                path: "/policy",
                element: <PolicyPage />,
            },
            {
                path: "/add-query",
                element: (
                    <PrivateRoute>
                        <AddQueryPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/queries/recommend/:id",
                element: <QueryDetailsPage />,
            },
            {
                path: "/my-queries/:id",
                element: <MyQueryDetailsPage />,
            },
            {
                path: "/update/:id",
                element: <UpdateDetailspage />,
            },
        ],
    },
    {
        path: "/*",
        element: <ErrorPage />,
    },
]);
