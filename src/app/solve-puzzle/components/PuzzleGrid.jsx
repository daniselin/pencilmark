import React from "react";
import {connect} from "react-redux";
import PuzzleCol from "./PuzzleCol";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, ["currentDigits", "cellColors"]),
        ...pick(state.windowSize, ["height", "width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const PuzzleGrid = (props) => {
    const {
        currentDigits,
        cellColors,
        height,
        width
    } = props;

    const size = Math.min(height, width) * .80;

    const gridStyle = {
        height: size + 3,
        width: size,
    };

    const cells = currentDigits;

    return(
        <div className='d-flex justify-content-center border border-2 border-dark' style={gridStyle}>
            <PuzzleCol height={size} width={size} col={1}
                       colors={cellColors.slice(0, 9)}
                       value={cells.slice(0, 9)}
            />
            <PuzzleCol height={size} width={size} col={2}
                       colors={cellColors.slice(9, 18)}
                       value={cells.slice(9, 18)}
            />
            <PuzzleCol height={size} width={size} col={3}
                       colors={cellColors.slice(18, 27)}
                       value={cells.slice(18, 27)}
            />
            <PuzzleCol height={size} width={size} col={4}
                       colors={cellColors.slice(27, 36)}
                       value={cells.slice(27, 36)}
            />
            <PuzzleCol height={size} width={size} col={5}
                       colors={cellColors.slice(36, 45)}
                       value={cells.slice(36, 45)}
            />
            <PuzzleCol height={size} width={size} col={6}
                       colors={cellColors.slice(45, 54)}
                       value={cells.slice(45, 54)}
            />
            <PuzzleCol height={size} width={size} col={7}
                       colors={cellColors.slice(54, 63)}
                       value={cells.slice(54, 63)}
            />
            <PuzzleCol height={size} width={size} col={8}
                       colors={cellColors.slice(63, 72)}
                       value={cells.slice(63, 72)}
            />
            <PuzzleCol height={size} width={size} col={9}
                       colors={cellColors.slice(72, 81)}
                       value={cells.slice(72, 81)}
            />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleGrid);