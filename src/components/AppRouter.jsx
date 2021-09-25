import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <MyLoader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {
                    privateRoutes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}/>
                    )
                }
                <Redirect to={'/posts'}/>
            </Switch>
            :
            <Switch>
                {
                    publicRoutes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}/>
                    )
                }

                <Redirect to={'/login'}/>
            </Switch>

    );
};

export default AppRouter;