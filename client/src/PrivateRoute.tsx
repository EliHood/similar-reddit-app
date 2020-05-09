import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleAccount } from "./selectors/selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const isGoogleAccount = useSelector(getGoogleAccount());

    // if user signed up and verified account, give user access to all authenticated routes,
    // of if user signed up using google oauth, give user access to all authenticated routes
    if (rest.googleAccount === true) {
        return <Route {...rest} render={(props) => <Component {...props} />} />;
    } else if (rest.isAuthenticated !== false) {
        return <Route {...rest} render={(props) => <Component {...props} />} />;
    } else {
        return <Redirect to={{ pathname: "/login" }} />;
    }
};

export default PrivateRoute;
