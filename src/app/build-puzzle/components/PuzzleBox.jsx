import {bindActionCreators} from "redux";
import React from "react";
import {connect} from "react-redux";
import {actions as buildPuzzleActions} from "..";
import PuzzleCell from "./PuzzleCell";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {...pick(state.buildPuzzle, [
            "selectedCell"
        ])};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            clickCell: buildPuzzleActions.clickCell,
            changeCellValue: buildPuzzleActions.changeCellValue
        }, dispatch)
    };
};

const PuzzleBox = (props) => {
    const {
        value,
        box,
        height,
        width,
        row,
        col,
        actions
    } = props;

    const {
        clickCell,
        changeCellValue
    } = actions;

    const size = Math.min(height, width) / 3;

    const boxStyle = {
        height: size,
        width: size,
    }

    return(
        <div className='border border-dark border-1' style={boxStyle}>
            <div className='row g-0'>
                <PuzzleCell height={size} width={size} row={row} col={col} box={box} cell={1}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(0)}/>
                <PuzzleCell height={size} width={size} row={row} col={col + 1} box={box} cell={2}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(1)}/>
                <PuzzleCell height={size} width={size} row={row} col={col + 2} box={box} cell={3}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(2)}/>
            </div>
            <div className='row g-0'>
                <PuzzleCell height={size} width={size} row={row + 1} col={col} box={box} cell={4}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(3)}/>
                <PuzzleCell height={size} width={size} row={row + 1} col={col + 1} box={box} cell={5}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(4)}/>
                <PuzzleCell height={size} width={size} row={row + 1} col={col + 2} box={box} cell={6}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(5)}/>
            </div>
            <div className='row g-0'>
                <PuzzleCell height={size} width={size} row={row + 2} col={col} box={box} cell={7}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(6)}/>
                <PuzzleCell height={size} width={size} row={row + 2} col={col + 1} box={box} cell={8}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(7)}/>
                <PuzzleCell height={size} width={size} row={row + 2} col={col + 2} box={box} cell={9}
                            onKeyStroke={(e) => changeCellValue(e)}
                            onClick={(box, cell, row, col) => clickCell(box, cell, row, col)}
                            value={value.charAt(8)}/>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleBox);