import {bindActionCreators} from "redux";
import {actions as profileActions} from "..";
import MainContainer from "../../layout/MainContainer";
import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(ownProps.match, [
            "params"
        ]),
        ...pick(state.user, [
            "username",
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            initializeProfile: profileActions.initializeProfile
        }, dispatch)
    };
};

const UserProfile = (props) => {
    const {
        params,
        actions
    } = props;

    const {username} = params;

    const {initializeProfile} = actions;

    const initialize = useCallback((userName) => {
        initializeProfile(userName);
        }, [initializeProfile]
    );

    useEffect(() => {
        initialize(username);
    }, [username, initialize]);

    return(
        <MainContainer section="profile"
                       title={""}>}>
        </MainContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);