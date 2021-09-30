import pick from "lodash/pick";
import {actions as modalTypes} from "..";
import {bindActionCreators} from "redux";
import React, {useCallback} from "react";
import SubmitButton from "../../form/components/SubmitButton";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {...pick(state.modal, [
        "show",
        "attributes",
        "showId"
        ])};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            destroyModal : modalTypes.destroyModal
        }, dispatch)
    };
};

const Modal = (props) => {

    const {
        id,
        className,
        header,
        isProcessing,
        processingLabel,
        onSubmit,
        onManualDestroy,
        submitLabel,
        submitColor,
        cancelLabel,
        cancelColor,
        children,
        show,
        attributes,
        showId,
        actions
    } = props;

    const {
        destroyModal
    } = actions;

    const submit = useCallback((event) => {
        event.preventDefault();
        onSubmit(id);
    }, [attributes, onSubmit])

    const destroy = useCallback((event) => {
        event.preventDefault();
        onManualDestroy && onManualDestroy(id);
        destroyModal(id);
    }, [destroyModal, id, onManualDestroy]
    );

    const ariaLabelledBy = () => {
        switch (className) {
            case "bs-modal-lg":
                return "my-large-modal-label";
            default:
                return "my-sm-modal-label"
        }
    };

    const modalDialogClassName = () => {
        switch (className) {
            case "bs-modal-lg":
                return "modal-dialog modal-lg";
            default:
                return "modal-dialog"
        }
    };

    const display = {display: show ? "block" : "none"};

    return (
        <>
            <div style={{opacity:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}} show={show.toString()} id={id} className='modal fade' tabIndex="-1" role="dialog" aria-labelledby={ariaLabelledBy()} aria-hidden={show}>

                {(show && id === showId) &&
                <div className={modalDialogClassName()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            {header &&
                            <h2 className="modal-title" id="static-modal-label">{header}</h2>}
                        </div>

                        <div className="modal-body">
                            {children}
                        </div>

                        <div className="modal-footer">
                            <SubmitButton
                                id="modal-cancel"
                                color={cancelColor}
                                className="btn-sm"
                                data-dismiss="modal"
                                onClick={destroy}
                                label={cancelLabel}
                            />

                            <SubmitButton
                                label={submitLabel}
                                color={submitColor}
                                className="btn-sm"
                                onClick={submit}
                                loadingLabel={processingLabel}
                                isLoading={isProcessing}/>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
};

Modal.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    header: PropTypes.string,
    isProcessing: PropTypes.bool,
    processingLabel: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onManualDestroy: PropTypes.func,
    show: PropTypes.bool,
    submitLabel: PropTypes.string,
    submitColor: PropTypes.string
}

Modal.defaultProps = {
    processingLabel: "Processing...",
    isProcessing: false,
    show: false,
    submitLabel: "Submit",
    submitColor: "danger"
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);