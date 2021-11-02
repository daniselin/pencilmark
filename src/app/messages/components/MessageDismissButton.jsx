import {actions} from "../index";
import {connect} from "react-redux";
import React, {useCallback} from "react";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            resetSuccessMessage: actions.resetSuccessMessage
        }, dispatch)
    };
};

const MessageDismissButton = (props) => {
    const {actions} = props;
    const {resetSuccessMessage} = actions;

    const onResetSuccessMessage = useCallback((event) => {
        event.preventDefault();
        resetSuccessMessage();
    }, [resetSuccessMessage]
    );

    return (
        <button type="button" className="btn-sm btn-close" onClick={onResetSuccessMessage}>
        </button>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageDismissButton);