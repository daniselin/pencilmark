import React from "react";
import {connect} from "react-redux";
import SmallPuzzleCol from "./SmallPuzzleCol";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {
        ...pick(state.windowSize, ["width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SmallGrid = (props) => {
    const {
        width,
        cells,
    } = props;

    const size = width * .15;

    const gridStyle = {
        height: size + 2,
        width: size,
    };


    return(
        <div className='d-inline-flex ml-auto justify-content-center border border-2 border-dark' style={gridStyle}>
            <SmallPuzzleCol height={size} width={size} col={1} value={cells.slice(0, 9)}/>
            <SmallPuzzleCol height={size} width={size} col={2} value={cells.slice(9, 18)}/>
            <SmallPuzzleCol height={size} width={size} col={3} value={cells.slice(18, 27)}/>
            <SmallPuzzleCol height={size} width={size} col={4} value={cells.slice(27, 36)}/>
            <SmallPuzzleCol height={size} width={size} col={5} value={cells.slice(36, 45)}/>
            <SmallPuzzleCol height={size} width={size} col={6} value={cells.slice(45, 54)}/>
            <SmallPuzzleCol height={size} width={size} col={7} value={cells.slice(54, 63)}/>
            <SmallPuzzleCol height={size} width={size} col={8} value={cells.slice(63, 72)}/>
            <SmallPuzzleCol height={size} width={size} col={9} value={cells.slice(72, 81)}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallGrid);