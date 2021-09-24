import {Link} from "react-router-dom";
import React, {useCallback} from "react";
import * as PropTypes from "prop-types";

const NavigationLink = (props) => {
    const {
        title,
        link,
        active
    } = props;

    const onClick = useCallback((e) => {
        const {onClick} = props;
        onClick && onClick(e);
    }, [props]);

    return (
        <li role="presentation" className={"nav-item btn btn-dark text-light m-2 " + (active ? "active" : "")}>
            <Link className="text-light" to={link} onClick={onClick}>{title}</Link>
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