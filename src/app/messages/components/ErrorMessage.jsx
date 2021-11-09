import React, {useCallback} from "react";

const ErrorMessage = (props) => {
    const {errorMessage} = props;

    const onClick = useCallback ((e) => {
        const {onClick} = props;
        if (onClick) {
            onClick(e);
        }
    }, [props]);

    if (!errorMessage) {
        return false
    };

    return (
        <div className="alert alert-danger alert-icon" role="alert">
            <div className="row">
                <div className="col-2">
                    <button type="button" className="close btn btn-sm btn-danger" onClick={(e) => {onClick(e)}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="col-10">
                    Error: {errorMessage}
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;