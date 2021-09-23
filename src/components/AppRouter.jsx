import React from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Page404 from "../pages/Page404";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={'/about'}>
                <About/>
            </Route>
            <Route path={'/pages'}>
                <Posts/>
            </Route>
            <Route path={'/404'}>
                <Page404/>
            </Route>
            <Redirect to={'/404'}/>
        </Switch>
    );
};

export default AppRouter;