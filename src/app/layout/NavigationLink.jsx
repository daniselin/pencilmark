import {Link} from "react-router-dom";
import React, {useCallback} from "react";
import * as PropTypes from "prop-types";

const NavigationLink = (props) => {
    const {
        title,
        link,
        active,
        onClick
    } = props;

    const onSelect = useCallback((event) => {
        if (onClick) {
            onClick({event: event});
        };
    }, [props, onClick]);

    return (
        <li role="presentation" className={active ? "active" : ""}>
            <Link to={link} onClick={onClick ? (e) => onSelect(e) : () => {} }>{title}</Link>
        </li>
    )
}

NavigationLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool
};

NavigationLink.defaultProps = {
    active: false
};

export default NavigationLink;