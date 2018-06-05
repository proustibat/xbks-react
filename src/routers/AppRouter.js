import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HeaderRoute from '../routers/HeaderRoute';
import PageHome from '../pages/PageHome';
import PageBook from '../pages/PageBook';
import PageCart from '../pages/PageCart';
import PageNotFound from '../pages/PageNotFound';
import ScrollToTop from "./ScrollToTop";

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <ScrollToTop>
            <Switch>
                <HeaderRoute
                    exact = { true }
                    path = "/"
                    component = { PageHome }
                />
                <HeaderRoute
                    exact = { true }
                    path = "/cart"
                    component = { PageCart }
                />
                <HeaderRoute
                    path = "/book/:isbn"
                    component = { PageBook }
                />
                <HeaderRoute component = { PageNotFound } />
            </Switch>
        </ScrollToTop>
    </Router>
);

export default AppRouter;
