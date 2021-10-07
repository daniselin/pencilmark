import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import some from "lodash/some";
import {backgroundColorMap, index, shadeColor} from "../../utils";


const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, [
            "selectedCell",
            "selectedCells",
            "conflictCells",
            "loadedPuzzle",
            "currentDigits",
            "cellColors",
            "cornerDigits",
            "centerDigits",
            "enterMode"
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
        cornerDigits,
        centerDigits,
        selectedCells,
        conflictCells,
        enterMode,
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
        if (enterMode !== "digit" || loadedPuzzle.given_digits.charAt(index(col, row)) !== value || value === "_") {
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

    const backgroundColor = (isSelected) ? "rgb(255, 237, 133)" :
        (isConflict) ? "rgb(217, 37, 37)" :
            (isSelectedInBoxRowCol) ? "rgb(217, 239, 255)" :
                "transparent";

    const cellColor = backgroundColorMap[cellColors.charAt(index(col, row))]

    const textColor = loadedPuzzle["given_digits"].charAt(index(col, row)) === value ? "#000000" : "#004de6"

    let cellStyle = {
        width:size,
        height:size,
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

    let cellCornerDigits = "";
    for (let i = 0; i < Object.keys(cornerDigits[col][row]).length; i++) {
        if (cornerDigits[col][row][i + 1]) {
            cellCornerDigits += String(i + 1);
        }
    };

    let cellCenterDigits = "";
    for (let i = 0; i < Object.keys(centerDigits[col][row]).length; i++) {
        if (centerDigits[col][row][i + 1]) {
            cellCenterDigits += String(i + 1);
        }
    };

    let centerDigitSize = cellCenterDigits.length <= 5 ? width * .09 * .37 : (width * .09 * .37 * (.9 ** (cellCenterDigits.length - 5)));

    return(
        <div
            style={cellStyle}
            draggable="true"
            className="border-dark d-flex align-items-center justify-content-center position-relative"
            onClick={(e) => onClick(e)}
            onDragOver={(e) => onDragOver(e)}
            onDragStart={(e) => onDragStart(e)}
            unselectable="on"
        >
            {(value !== "_") ?
                <>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        width: size - 1,
                        height: size - 1,
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }}>
                        {value}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        alignItems: "center",
                        width: size - 1,
                        height: size - 1,
                        top: 0,
                        left: 0,
                        backgroundColor: cellColor,
                        zIndex: 0
                    }}>
                    &nbsp;
                    </div>
                </>
            :
            <>
                <div style={{
                    justifyContent: "space-around",
                    alignItems: "start",
                    fontSize: width * .09 * .37,
                    width: size,
                    height: size * .9,
                    color: "#004de6",
                    position: "absolute",
                    top: 0,
                    left: 0
                }}>
                    <div className="row g-0 justify-content-center" style={{height: "33%"}}>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(0) && cellCornerDigits.charAt(0)}
                        </div>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(4) && cellCornerDigits.charAt(4)}
                        </div>
                        <div className="col-4 g-0" >
                            {cellCornerDigits.charAt(1) && cellCornerDigits.charAt(1)}
                        </div>
                    </div>
                    <div className="row g-0 align-items-center justify-content-center" style={{height: "33%"}}>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(6) && cellCornerDigits.charAt(6)}
                        </div>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(8) && cellCornerDigits.charAt(8)}
                        </div>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(7) && cellCornerDigits.charAt(7)}
                        </div>
                    </div>
                    <div className="row g-0 align-items-start justify-content-center pb-2" style={{height: "30%"}}>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(2) && cellCornerDigits.charAt(2)}
                        </div>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(5) && cellCornerDigits.charAt(5)}
                        </div>
                        <div className="col-4 g-0">
                            {cellCornerDigits.charAt(3) && cellCornerDigits.charAt(3)}
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: size - 1,
                    height: size - 1,
                    top: 0,
                    left: 0,
                    backgroundColor: cellColor,
                    position: "absolute",
                    zIndex: 0
                }}>
                    &nbsp;
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: centerDigitSize,
                    width: size,
                    height: size * .9,
                    color: "#004de6",
                    top: 0,
                    left: 0
                }}>
                    {cellCenterDigits}
                </div>
            </>}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCell);