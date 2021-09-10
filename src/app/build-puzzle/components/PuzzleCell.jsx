import {bindActionCreators} from "redux";
import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {actions as buildPuzzleActions} from "..";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {
        ...pick(state.buildPuzzle, [
            "selectedCell"
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const PuzzleCell = (props) => {
    const {
        selectedCell,
        height,
        width,
        row,
        col,
        box,
        cell,
        value
    } = props;

    const isSelected = (selectedCell.box === box && selectedCell.cell === cell);
    const selectedIndex = (selectedCell.box  - 1) * 9 + (selectedCell.cell - 1);
    const cellIndex = (box  - 1) * 9 + (cell - 1);

    const isSelectedInBoxRowCol = (selectedCell.box === box ||
        selectedCell.row === row  ||
        selectedCell.col === col);


    const onKeyStroke = useCallback ((e) => {
        if (isSelected) {
            const {onKeyStroke} = props;
            if (onKeyStroke){
                console.log(e.key);
                if (e.key in [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                    onKeyStroke(e.key);
                }
            };
        }
    }, [props]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyStroke);
        return function cleanup() {
            document.removeEventListener('keydown', onKeyStroke);
        }
    });

    const onClick = useCallback (() => {
        const {onClick} = props;
        if (onClick) {
            onClick(box, cell, row, col);
        }
    }, [props]);

    const size = Math.min(height, width) / 3 - 1;

    const cellStyle = {
        width:size,
        height:size,
        textAlign:"center",
        verticalAlign:"middle"
    }

    return(
        <div style={cellStyle} className={'border border-1 border-dark' + (isSelected && " bg-warning") + (isSelectedInBoxRowCol && " bg-info")} onClick={() => onClick()}>
            {value === ("0" || 0) ? " ": value}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCell);