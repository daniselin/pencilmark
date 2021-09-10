import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import Header from "./Header";
import React, {useCallback, useEffect} from "react";
import SuccessMessage from "../messages/components/SuccessMessage";
import ErrorMessage from "../messages/components/ErrorMessage";
import FatalErrorMessage from "../messages/components/FatalErrorMessage";
import NavigationLink from "./NavigationLink";
import {pick} from "lodash";
import Footer from "./Footer";
import Login from "../user/components/Login";
import {bindActionCreators} from "redux";
import {actions as userActions} from "../user";
import PuzzleGrid from "../build-puzzle/components/PuzzleGrid";

const mapStateToProps = (state) => {
    return {
        ...pick(state.messages, [
            "fatalErrorMessage"
        ]),
        user: {
            ...pick(state.user, [
                "username",
                "email",
                "hasAuthenticated"
            ])
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            logOut: userActions.logoutUser,
            initializeAuthentication: userActions.initializeAuthentication
        }, dispatch)
    };
};
const MainContainer = (props) => {
    const {
        children,
        section,
        secondarySection,
        title,
        fatalErrorMessage,
        user,
        actions
    } = props;

    const {
        logOut,
        initializeAuthentication
    } = actions;

    const logoutUser = useCallback(() => {
            logOut();
        }, [logOut]
    );

    const initialize = useCallback(() => {
            initializeAuthentication();
        }, [initializeAuthentication]
    );

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div>
                <Header userName={user["username"]}>
                    {user["hasAuthenticated"] ?
                        <>
                            <NavigationLink title={user["username"]} link={"/" + user["username"]} active={section === "home"}/>
                            <NavigationLink title="Build Puzzle" link="/puzzle/build"
                                            active={section === "build-puzzle"}/>
                            <NavigationLink link="/login/" title="Logout" onClick={() => logoutUser()}>Logout</NavigationLink>
                        </>
                        :
                        <>
                            <NavigationLink title="Login/Signup" link="/login" active={section === "login"}/>
                        </>
                    }
                </Header>

            <div className="d-flex justify-content-center">
                {/*{section === "home" &&*/}
                {/*<Home secondarySection={secondarySection} username={user["username"]}/>*/}
                {/*}*/}
                {section === "build-puzzle" &&
                <PuzzleGrid />
                }
                {section === "login" &&
                <Login />
                }
            </div>

            <div className="container-fluid">
                <div className="row util-padding-top-20">
                    <div className="col-xl-10 col-xl-offset-1 app-main-container">
                        {fatalErrorMessage ?
                            <FatalErrorMessage/>
                            :
                            (user["hasAuthenticated"] ?
                                    <div>
                                        {title}
                                        <SuccessMessage/>
                                        <ErrorMessage/>
                                        {/*{children}*/}
                                    </div>
                                    :
                                    <></>
                            )
                        }
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
    section: PropTypes.oneOf(["notFound","home", "build-puzzle", "login"]).isRequired,
    secondarySection: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);