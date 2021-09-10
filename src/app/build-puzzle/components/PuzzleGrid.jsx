import React from "react";
import {connect} from "react-redux";
import PuzzleBox from "./PuzzleBox";
import {pick} from "lodash";


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

    const size = Math.min(height, width) * .6;

    const gridStyle = {
        height: size,
        width: size,
        backgroundColor: "lightblue"
    };


    return(
        <div className='d-flex justify-content-center' style={gridStyle} >
            <div>
                <PuzzleBox height={size} width={size} box={1} row={1} col={1} value={cells.slice(0, 9)}/>
                <PuzzleBox height={size} width={size} box={2} row={4} col={1} value={cells.slice(9, 18)}/>
                <PuzzleBox height={size} width={size} box={3} row={7} col={1} value={cells.slice(18, 27)}/>
            </div>
            <div>
                <PuzzleBox height={size} width={size} box={4} row={1} col={4} value={cells.slice(27, 36)}/>
                <PuzzleBox height={size} width={size} box={5} row={4} col={4} value={cells.slice(36, 45)}/>
                <PuzzleBox height={size} width={size} box={6} row={7} col={4} value={cells.slice(45, 54)}/>
            </div>
            <div>
                <PuzzleBox height={size} width={size} box={7} row={1} col={7} value={cells.slice(54, 63)}/>
                <PuzzleBox height={size} width={size} box={8} row={4} col={7} value={cells.slice(63, 72)}/>
                <PuzzleBox height={size} width={size} box={9} row={7} col={7} value={cells.slice(72, 81)}/>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleGrid);