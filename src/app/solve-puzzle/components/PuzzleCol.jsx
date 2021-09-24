import {bindActionCreators} from "redux";
import React from "react";
import {connect} from "react-redux";
import {actions as solvePuzzleActions} from "..";
import PuzzleCell from "./PuzzleCell";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {...pick(state.solvePuzzle, [
            "selectedCell",
            "loadedPuzzle",
        ])};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            clickCell: solvePuzzleActions.clickCell,
            controlClickCell: solvePuzzleActions.controlClickCell,
            dragCell: solvePuzzleActions.dragCell,
            controlDragCell: solvePuzzleActions.controlDragCell,
            initializeDragCell: solvePuzzleActions.initializeCellDrag,
            initializeControlDragCell: solvePuzzleActions.initializeControlCellDrag,
            changeCellValue: solvePuzzleActions.changeCellValue,
            deleteCellValue: solvePuzzleActions.deleteCellValue
        }, dispatch)
    };
};

const PuzzleCol = (props) => {
    const {
        loadedPuzzle,
        value,
        height,
        width,
        col,
        actions
    } = props;

    const {
        clickCell,
        controlClickCell,
        dragCell,
        changeCellValue,
        deleteCellValue,
        initializeDragCell,
        initializeControlDragCell,
        controlDragCell,
    } = actions;

    const size = Math.min(height, width);

    let boxStyle = {
        height: size,
        width: size / 9,
    }

    let box = 0;
    if (col < 4){
        box = 1;
    } else if (col < 7) {
        box = 4;
    } else if (col < 10) {
        box = 7;
    }

    const givenDigits = loadedPuzzle.given_digits;


    return(
        <div style={boxStyle}>
            <PuzzleCell height={size} width={size} col={col} row={1} box={box} cell={1}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(0)}/>
            <PuzzleCell height={size} width={size} col={col} row={2} box={box} cell={2}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(1)}/>
            <PuzzleCell height={size} width={size} col={col} row={3} box={box} cell={3}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(2)}/>
            <PuzzleCell height={size} width={size} col={col} row={4} box={box + 1} cell={4}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(3)}/>
            <PuzzleCell height={size} width={size} col={col} row={5} box={box + 1} cell={5}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(4)}/>
            <PuzzleCell height={size} width={size} col={col} row={6} box={box + 1} cell={6}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(5)}/>
            <PuzzleCell height={size} width={size} col={col} row={7} box={box + 2} cell={7}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(6)}/>
            <PuzzleCell height={size} width={size} col={col} row={8} box={box + 2} cell={8}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(7)}/>
            <PuzzleCell height={size} width={size} col={col} row={9} box={box + 2} cell={9}
                        changeCellValue={(e) => changeCellValue(e)}
                        deleteCellValue={(e) => deleteCellValue(e)}
                        onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                        onControlClick={(box, cell, row, col) => controlClickCell(box, cell, row, col)}
                        onDragStart={() => initializeDragCell()}
                        onDrag={(box, cell, row, col) => dragCell(box, cell, row, col)}
                        onControlDrag={(box, cell, row, col) => controlDragCell(box, cell, row, col)}
                        onControlDragStart={(box, cell, row, col) => initializeControlDragCell(box, cell, row, col)}
                        value={value.charAt(8)}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCol);