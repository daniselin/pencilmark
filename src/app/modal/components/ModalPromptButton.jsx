import React from "react";
import * as PropTypes from "prop-types";

const ModalPromptButton = (props) => {

    const {
        id,
        dataTarget
    } = props;

    return (
        <button
            id={id}
            type="button"
            data-toggle="modal"
            data-target={dataTarget}
            data-backdrop="static"
            data-keyboard="false"
            stype={{display: 'none'}}/>
    );
};

ModalPromptButton.propTypes = {
    id: PropTypes.string.isRequired,
    dataTarget: PropTypes.string.isRequired
};

export default ModalPromptButton;