import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import some from "lodash/some";
import {colorMap, index} from "../../utils";


const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, [
            "selectedCell",
            "selectedCells",
            "conflictCells",
            "loadedPuzzle",
            "currentDigits",
            "cellColors"
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const PuzzleCell = (props) => {
    const {
        loadedPuzzle,
        selectedCell,
        cellColors,
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

    const isSelected = (selectedCell.row === row && selectedCell.col === col) ||
        (some(selectedCells, {box: box, cell: cell, row: row, col: col}));

    const isSelectedInBoxRowCol = (selectedCell.box === box ||
        selectedCell.row === row  ||
        selectedCell.col === col);

    const isConflict = (some(conflictCells, {row: row, col: col}));

    const changeCellValue = useCallback ((e) => {
        if (loadedPuzzle.given_digits.charAt(index(col, row)) !== value || value === "_") {
            if (isSelected) {
                const {changeCellValue, deleteCellValue} = props;
                if (changeCellValue) {
                    if (e.key in [9, 1, 2, 3, 4, 5, 6, 7, 8, 0]) {
                        changeCellValue(e.key);
                    } else if (e.key === "Backspace") {
                        deleteCellValue();
                    }
                }
            }
        }
    }, [props]);

    useEffect(() => {
        document.addEventListener('keydown', changeCellValue)
        return function cleanup() {
            document.removeEventListener('keydown', changeCellValue);
        }
    }, [loadedPuzzle, value, changeCellValue]);

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
            (isSelectedInBoxRowCol) ? "#AFEEEE80 " :
                colorMap[cellColors.charAt(index(col, row))];

    const textColor = loadedPuzzle["given_digits"].charAt(index(col, row)) === value ? "#000000" : "#004de6"

    let cellStyle = {
        width:size,
        height:size,
        textAlign:"center",
        fontSize: width * .09,
        cursor: "pointer",
        borderWidth: "0px 1px 1px 0px",
        borderStyle: "solid",
        backgroundColor: backgroundColor,
        color: textColor
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