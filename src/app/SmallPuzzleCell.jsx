import React from "react";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const PuzzleCell = (props) => {
    const {
        height,
        width,
        row,
        col,
        value
    } = props;

    let cellStyle = {
        width: width,
        height: height,
        textAlign:"center",
        fontSize: width * .83,
        borderWidth: "0px 1px 1px 0px",
        borderStyle: "solid"
    }

    if (col === 3 || col === 6){
        if (row === 3 || row === 6) {
            cellStyle["borderWidth"] = "0px 2px 2px 0px"
        }
        else {
            cellStyle["borderWidth"] = "0px 2px 1px 0px"
        }
    } else if (row === 3 || row === 6){
        cellStyle["borderWidth"] = "0px 1px 2px 0px"
        if (col === 1) {
            cellStyle["borderWidth"] = "0px 1px 2px 2px"
        }
        if (col === 9) {
            cellStyle["borderWidth"] = "0px 2px 2px 0px"
        }
    } else if (col === 1) {
        cellStyle["borderWidth"] = "0px 1px 1px 2px"
    } else if (col === 9) {
        cellStyle["borderWidth"] = "0px 2px 1px 0px"
    }

    return(
        <div
            style={cellStyle}
            className={`border-dark`}
            unselectable="on" >
            {(value === "_") ? " ": value}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCell);