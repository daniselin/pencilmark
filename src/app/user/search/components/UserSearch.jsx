import {bindActionCreators} from "redux";
import {actions as userActions} from "../..";
import MainContainer from "../../../layout/MainContainer";
import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";
import Loading from "../../../layout/Loading";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(ownProps.match, [
            "params"
        ]),
        ...pick(state.user, [
            "isLoading"
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            initializeSearch: userActions.initializeSearch
        }, dispatch)
    };
};

const UserSearch = (props) => {
    const {
        params,
        isLoading,
        actions
    } = props;

    const q = params ? params["q"] : "";

    const {initializeSearch} = actions;

    const initialize = useCallback((q) => {
        initializeSearch(q);
    }, [initializeSearch]);

    useEffect(() => {
        initialize(q);
    }, [q, initialize]);

    return(
        isLoading ? <Loading/> :
            <MainContainer section="user-search"
                           title={<h1>User Search</h1>}>}>
            </MainContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);