import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import {Redirect, Route, Switch} from "react-router";
import NotFound from "../app/NotFound";
import React from "react";
import Authentication from "../app/user/components/Authentication";
import BuildPuzzle from "../app/build-puzzle/components/BuildPuzzle";
import UserProfile from "../app/profile/components/UserProfile";
import SolvePuzzle from "../app/solve-puzzle/components/SolvePuzzle";
import UserSearch from "../app/user/search/components/UserSearch";

export default (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/login/" component={Authentication}/>
            <Route exact path="/puzzle/build/" component={BuildPuzzle}/>
            <Route exact path="/">
                <Redirect to={"/login/"}/>
            </Route>
            <Route exact path={"/user/search/"} component={UserSearch}/>
            <Route exact path={"/user/:username"} component={UserProfile}/>
            <Route exact path={"/puzzle/solve/:id"} component={SolvePuzzle}/>
            <Route component={NotFound}/>

        </Switch>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossOrigin="anonymous"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
                integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
                crossOrigin="anonymous"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
                integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
                crossOrigin="anonymous"></script>
    </ConnectedRouter>
);