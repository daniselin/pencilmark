import React, {useCallback} from "react";
import * as PropTypes from "prop-types";
import FormGroup from "./FormGroup";

const Radio = (props) => {
    const {
        id,
        name,
        defaultChecked,
        disabled,
        fieldErrors,
        label,
        standalone,
        isChecked
    } = props;

    const onChange = useCallback((e) => {
        const {onChange} = props;
        if (onChange) {
            onChange(e);
        };
    }, [props]);

    return (
        standalone ?
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-outline-primary">
                    <input
                        type="radio"
                        autoComplete="off"
                        className="btn-check"
                        id={id}
                        name ={name || id}
                        onChange = {onChange}
                        defaultChecked={defaultChecked}
                        checked={isChecked}
                        disabled={disabled}/> {label}
                </label>
            </div>
            :
            <FormGroup id={id} fieldErrors={fieldErrors} showError={false}>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-outline-primary">
                        <input
                            type="radio"
                            autoComplete="off"
                            className="btn-check"
                            id={id}
                            name ={name || id}
                            onChange = {onChange}
                            defaultChecked={defaultChecked}
                            checked={isChecked}
                            disabled={disabled}/> {label}

                    </label>
                </div>
            </FormGroup>
    )
}

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.object
    ]),
    help: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    standalone: PropTypes.bool,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
};

Radio.defaultProps = {
    name: "",
    label: "",
    help: "",
    disabled: false,
    standalone: false
};

export default Radio;