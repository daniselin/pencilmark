import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import Header from "./Header";
import React, {useCallback, useEffect} from "react";
import NavigationLink from "./NavigationLink";
import {pick} from "lodash";
import Footer from "./Footer";
import Login from "../user/components/Login";
import {bindActionCreators} from "redux";
import {actions as userActions} from "../user";
import {actions as buildActions} from "../build-puzzle";
import {actions as solveActions} from "../solve-puzzle";
import {actions as modalActions} from "../modal";
import PuzzleBuilder from "../build-puzzle/components/PuzzleBuilder";
import Profile from "../profile/components/Profile";
import PuzzleSolver from "../solve-puzzle/components/PuzzleSolver";
import Loading from "./Loading";
import UserSearchResults from "../user/search/components/UserSearchResults";

const mapStateToProps = (state) => {
    return {
        ...pick(state.messages, [
            "fatalErrorMessage",
            "isLoading"
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
            initializeAuthentication: userActions.initializeAuthentication,
            createModal: modalActions.createModal,
            closeModal: modalActions.destroyModal,
            rebuildPuzzle: buildActions.rebuildPuzzle,
            startNewPuzzle: buildActions.startNewPuzzle,
            viewPuzzle: solveActions.viewPuzzle,
            completePuzzle: solveActions.completePuzzle
        }, dispatch)
    };
};

const MainContainer = (props) => {
    const {
        section,
        secondarySection,
        user,
        title,
        isLoading,
        actions,
        hasAuthenticated
    } = props;

    const {
        logOut,
        initializeAuthentication,
        resetLoadedPuzzle,
        createModal,
        rebuildPuzzle,
        startNewPuzzle,
        viewPuzzle,
        completePuzzle
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
            (isLoading) ? <Loading/> :
                <>
                    <Header userName={user["username"]} onCreateModal={createModal}>
                        {user["hasAuthenticated"] ?
                            <>
                                <NavigationLink title={user["username"]} link={"/user/" + user["username"]}
                                                active={section === "profile"}/>
                                <NavigationLink title="Build Puzzle" link="/puzzle/build"
                                                active={section === "build-puzzle"}/>
                                <NavigationLink link="/login/" title="Logout" onClick={() => logoutUser()}/>
                                <NavigationLink link="/user/search/" title="Search Users"/>
                            </>
                            :
                            <>
                                <NavigationLink title="Login/Signup" link="/login" active={section === "login"}/>
                            </>
                        }
                    </Header>

                    <>
                        {title}
                        {section === "profile" &&
                        <Profile secondarySection={secondarySection}/>
                        }
                        {section === "build-puzzle" &&
                        <PuzzleBuilder
                            onCreateModal={createModal}
                            onRebuildPuzzle={rebuildPuzzle}
                            onStartNewPuzzle={startNewPuzzle}
                        />
                        }
                        {section === "solve-puzzle" &&
                        <>
                            <PuzzleSolver
                                onCreateModal={createModal}
                                onViewPuzzle={viewPuzzle}
                                onCompletePuzzle={completePuzzle}
                            />
                            <br/>
                            <br/>
                        </>
                        }
                        {section === "user-search" &&
                        <>
                            <UserSearchResults
                            />
                            <br/>
                            <br/>
                        </>
                        }
                        {section === "login" &&
                        <Login/>
                        }
                    </>

                    <Footer/>
                </>
    );
};

MainContainer.propTypes = {
    section: PropTypes.oneOf(["notFound","profile", "build-puzzle", "login", "solve-puzzle", "user-search"]).isRequired,
    secondarySection: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);