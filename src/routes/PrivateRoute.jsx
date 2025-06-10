import React, { useContext } from "react";
import { Navigate } from "react-router";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();
    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }

    return <Navigate to="/"/>;
};

export default PrivateRoute;
