import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import { Redirect, Route, Switch } from "react-router";
import NotFound from "../app/NotFound";
import React from "react";
import Authentication from "../app/user/components/Authentication";
import BuildPuzzle from "../app/build-puzzle/components/BuildPuzzle";

export default (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/login/" component={Authentication}/>
            <Route exact path="/puzzle/build/" component={BuildPuzzle}/>
            <Route exact path="/">
                <Redirect to={"/login/"}/>
            </Route>
            <Route component={NotFound}/>

        </Switch>
    </ConnectedRouter>
);