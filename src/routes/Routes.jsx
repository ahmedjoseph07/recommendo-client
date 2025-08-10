import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AllQueriespage from "../pages/AllQueriespage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
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
import HowItWorksPage from "../pages/HowItWorksPage";
import FAQ from "../pages/FAQ";

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
                element: (
                    <PrivateRoute>
                        <MyQueriesPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-recommendations",
                element: <MyRecommendationsPage />,
            },
            {
                path: "/how-it-works",
                element: <HowItWorksPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/faq",
                element: <FAQ />,
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
                element: (
                    <PrivateRoute>
                        <QueryDetailsPage />
                    </PrivateRoute>
                ),
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
