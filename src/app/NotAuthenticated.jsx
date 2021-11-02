import React from "react";
import NavigationLink from "./layout/NavigationLink";

export default () => { return (
    <div className="container">
        <div className="row">
            <div className="col-8">
                <div className="h4">
                    Authentication is required to view this page.
                </div>
                <NavigationLink title="Login/Signup" link="/login"/>
            </div>
        </div>
    </div>
)};