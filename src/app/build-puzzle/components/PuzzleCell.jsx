import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import some from "lodash/some";


const mapStateToProps = (state) => {
    return {
        ...pick(state.buildPuzzle, [
            "selectedCells",
            "conflictCells"
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const PuzzleCell = (props) => {
    const {
        selectedCells,
        conflictCells,
        height,
        width,
        row,
        col,
        box,
        cell,
        value
    } = props;

    const isSelected = (some(selectedCells, {box: box, cell: cell, row: row, col: col}));
    let isSelectedInBoxRowCol = false;

    if (selectedCells.length === 1) {
        isSelectedInBoxRowCol = (selectedCells[0].box === box ||
            selectedCells[0].row === row  ||
            selectedCells[0].col === col);
    }

    const isConflict = (some(conflictCells, {row: row, col: col}));

    const changeCellValue = useCallback ((e) => {
        if (isSelected) {
            const {changeCellValue, deleteCellValue} = props;
            if (changeCellValue){
                if (e.key in [9, 1, 2, 3, 4, 5, 6, 7, 8, 0]) {
                    changeCellValue(e.key);
                }
                else if (e.key === "Backspace") {
                    deleteCellValue();
                }
            };
        }
    }, [props]);

    useEffect(() => {
        document.addEventListener('keydown', changeCellValue);
        return function cleanup() {
            document.removeEventListener('keydown', changeCellValue);
        }
    });

    const onClick = useCallback ((e) => {
        const {onClick, onControlClick} = props;
        if (e.ctrlKey) {
            if (onControlClick){
                onControlClick(box, cell, row, col);
            }
        }
        else {
            if (onClick) {
                onClick(box, cell, row, col);
            }
        }
    }, [props]);

    const onDragOver = useCallback( (e) => {
        e.dataTransfer.dropEffect = "copy";
        const {onDrag, onControlDrag} = props;
        if (e.ctrlKey) {
            if (onControlDrag) {
                onControlDrag(box, cell, row, col);
            }
        } else {
            if (onDrag) {
                onDrag(box, cell, row, col);
            }
        }
    }, [props]);

    const onDragStart = useCallback( (e) => {
        e.dataTransfer.effectAllowed = "copyMove";
        const {onDragStart, onControlDragStart} = props;
        if (e.ctrlKey) {
            if (onControlDragStart) {
                onControlDragStart(box, cell, row, col);
            }
        }
        else if (onDragStart) {
            onDragStart();
        };
    }, [props]);

    const size = Math.min(height, width) / 9;

    const backgroundColor = (isSelected) ? "#FFD70080" :
        (isConflict) ? "#FF634780 " :
        (isSelectedInBoxRowCol) && "#AFEEEE80 ";

    let cellStyle = {
        width:size,
        height:size,
        textAlign:"center",
        fontSize: width * .09,
        cursor: "pointer",
        borderWidth: "0px 1px 1px 0px",
        borderStyle: "solid",
        backgroundColor: backgroundColor,
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
            draggable="true"
            className={`border-dark`}
            onClick={(e) => onClick(e)}
            onDragOver={(e) => onDragOver(e)}
            onDragStart={(e) => onDragStart(e)}
            unselectable="on"
        >
            {(value === "_") ? " ": value}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCell);