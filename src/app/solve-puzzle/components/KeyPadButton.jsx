import React, {useCallback} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, [
            "selectedCell",
            "selectedCells",
        ]),
        ...pick(state.windowSize, ["height", "width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const KeyPadCell = (props) => {
    const {
        value,
        onClick,
        height,
        width,
        color
    } = props;


    const changeCellValue = useCallback ((e) => {
        e.stopPropagation();
        const {onClick} = props;
        if (onClick){
            onClick(e);
        };
    }, [props]);

    const buttonStyle = {
        width: "100%",
        height: "100%",
        fontSize: Math.min(height, width) * .035,
        backgroundColor: color,
        color: "white"
    }

    return(
        <div className='p-2' style={{height: "90%"}}>
            <button
                draggable="true"
                className="btn"
                onClick={(e) => onClick(e)}
                style={buttonStyle}>
                {value}
            </button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyPadCell);