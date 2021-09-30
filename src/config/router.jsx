import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import {Redirect, Route, Switch} from "react-router";
import NotFound from "../app/NotFound";
import React from "react";
import Authentication from "../app/user/components/Authentication";
import BuildPuzzle from "../app/build-puzzle/components/BuildPuzzle";
import UserProfile from "../app/profile/components/UserProfile";
import SolvePuzzle from "../app/solve-puzzle/components/SolvePuzzle";

export default (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/login/" component={Authentication}/>
            <Route exact path="/puzzle/build/" component={BuildPuzzle}/>
            <Route exact path="/">
                <Redirect to={"/login/"}/>
            </Route>
            <Route exact path={"/user/:username"} component={UserProfile}/>
            <Route exact path={"/puzzle/solve/:id"} component={SolvePuzzle}/>
            {/*<Route exact path={"/user/search/"} component={UserSearch}/>*/}
            <Route component={NotFound}/>

        </Switch>
    </ConnectedRouter>
);