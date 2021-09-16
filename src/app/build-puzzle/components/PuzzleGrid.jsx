import React from "react";
import {connect} from "react-redux";
import PuzzleBox from "./PuzzleCol";
import {pick} from "lodash";
import PuzzleRow from "./PuzzleCol";
import PuzzleCol from "./PuzzleCol";


const mapStateToProps = (state) => {
    return {
        ...pick(state.buildPuzzle, ["cells"]),
        ...pick(state.windowSize, ["height", "width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const PuzzleGrid = (props) => {
    const {
        cells,
        height,
        width
    } = props;

    const size = Math.min(height, width) * .85;

    const gridStyle = {
        height: size + 3,
        width: size,
    };


    return(
        <div className='d-flex justify-content-center border border-2 border-dark' style={gridStyle}>
            <PuzzleCol height={size} width={size} col={1} value={cells.slice(0, 9)}/>
            <PuzzleCol height={size} width={size} col={2} value={cells.slice(9, 18)}/>
            <PuzzleCol height={size} width={size} col={3} value={cells.slice(18, 27)}/>
            <PuzzleCol height={size} width={size} col={4} value={cells.slice(27, 36)}/>
            <PuzzleCol height={size} width={size} col={5} value={cells.slice(36, 45)}/>
            <PuzzleCol height={size} width={size} col={6} value={cells.slice(45, 54)}/>
            <PuzzleCol height={size} width={size} col={7} value={cells.slice(54, 63)}/>
            <PuzzleCol height={size} width={size} col={8} value={cells.slice(63, 72)}/>
            <PuzzleCol height={size} width={size} col={9} value={cells.slice(72, 81)}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleGrid);