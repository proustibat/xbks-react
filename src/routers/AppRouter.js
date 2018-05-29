import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PageNotFound from '../components/PageNotFound';
import PageHome from "../components/PageHome";
import HeaderRoute from "../routers/HeaderRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <Switch>
            <HeaderRoute
                exact = { true }
                path = "/"
                component = { PageHome }
            />
            <HeaderRoute component = { PageNotFound } />
        </Switch>
    </Router>
);

export default AppRouter;
