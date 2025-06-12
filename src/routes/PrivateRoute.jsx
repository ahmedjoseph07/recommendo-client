import React, { useContext } from "react";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate} from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/"></Navigate>
};

export default PrivateRoute;
