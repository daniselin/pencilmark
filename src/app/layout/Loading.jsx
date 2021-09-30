import React from "react";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading-wrapper">
            <span className="loading-center text-center">
                <h2>Hang on a moment...</h2>
                <i className="fa fa-spinner fa-spin loading-spinner text-primary"/>
            </span>
        </div>
    );
};

export default Loading;