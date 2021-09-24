import React from "react";
import * as PropTypes from "prop-types";

const ModalDismissButton = (props) => {

    const {
        id
    } = props;

    return (
        <button
            id={id}
            type="button"
            data-dismiss="modal"
            stype={{display: 'none'}}/>
    );
};

ModalDismissButton.propTypes = {
    id: PropTypes.string.isRequired
};

export default ModalDismissButton;