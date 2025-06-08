import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AllQueriespage from "../pages/AllQueriespage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index:true,
                path: "/queries",
                element: <AllQueriespage/>
            }
        ]
    },
    
]);
