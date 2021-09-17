import React from "react";
import {connect} from "react-redux";
import SmallPuzzleCell from "./SmallPuzzleCell";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const PuzzleCol = (props) => {
    const {
        value,
        height,
        width,
        col,
    } = props;

    let boxStyle = {
        height: height,
        width: width / 9,
    }

    let box = 0;
    if (col < 4){
        box = 1;
    } else if (col < 7) {
        box = 4;
    } else if (col < 10) {
        box = 7;
    }



    return(
        <div style={boxStyle} className="d-flex flex-column">
            <SmallPuzzleCell height={height / 9} col={col} row={1} width={height / 9} value={value.charAt(0)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={2} width={height / 9} value={value.charAt(1)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={3} width={height / 9} value={value.charAt(2)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={4} width={height / 9} value={value.charAt(3)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={5} width={height / 9} value={value.charAt(4)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={6} width={height / 9} value={value.charAt(5)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={7} width={height / 9} value={value.charAt(6)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={8} width={height / 9} value={value.charAt(7)}/>
            <SmallPuzzleCell height={height / 9} col={col} row={9} width={height / 9} value={value.charAt(8)}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCol);