import React from "react";
import * as PropTypes from "prop-types";

const Header = (props) => {

    const {
        children,
        username,
        onCreateModal
    } = props;


    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Pencilmark</a>
                    </div>
                    <div className="">
                        <ul className="nav navbar-nav">
                            {children}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired
};

export default Header;