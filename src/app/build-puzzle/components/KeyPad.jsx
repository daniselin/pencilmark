import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as buildPuzzleActions} from "../index";
import TextField from "../../form/components/TextField";
import KeyPadButton from "./KeyPadButton";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {
        ...pick(state.windowSize, ["height", "width"]),
        ...pick(state.form.values, ["puzzleRules"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            changeCellValue: buildPuzzleActions.changeCellValue,
            deleteCellValue: buildPuzzleActions.deleteCellValue,
            createPuzzle: buildPuzzleActions.createPuzzle,
            savePuzzle: buildPuzzleActions.savePuzzle,
            onTextFieldFocus: buildPuzzleActions.onTextFieldFocus
        }, dispatch)};
};

const KeyPad = (props) => {
    const {
        cells,
        selectedCell,
        selectedCells,
        height,
        width,
        puzzleRules,
        actions
    } = props;

    const {
        changeCellValue,
        deleteCellValue,
        createPuzzle,
        savePuzzle,
        onTextFieldFocus
    } = actions;

    const keyPadStyle = {
        height: width * .2,
        width: (width * .2)
    }

    return(
        <table style={keyPadStyle}>
            <tbody>
                <tr style={{height: '16%'}}>
                    <td colSpan={3}>
                        <TextField required={true} id='puzzleRules' label="Puzzle Rules: " placeholder="Write rules here..."
                                   defaultValue={puzzleRules} onFocus={(e) => onTextFieldFocus(e)}/>
                    </td>
                </tr>
                <tr style={{height: '10%'}}>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={1} onClick={(e) =>
                        {
                            changeCellValue(1);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={2} onClick={(e) =>
                        {
                            changeCellValue(2);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={3} onClick={(e) =>
                        {
                            changeCellValue(3);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: '10%'}}>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={4} onClick={(e) =>
                        {
                            changeCellValue(4);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={5} onClick={(e) =>
                        {
                            changeCellValue(5);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={6} onClick={(e) =>
                        {
                            changeCellValue(6);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: '10%'}}>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={7} onClick={(e) =>
                        {
                            changeCellValue(7);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={8} onClick={(e) =>
                        {
                            changeCellValue(8);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={9} onClick={(e) =>
                        {
                            changeCellValue(9);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: '10%'}}>
                    <td style={{width: '30%'}}>
                        <KeyPadButton color="purple" value={0} onClick={(e) =>
                        {
                            changeCellValue(0);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td colSpan={2}>
                        <KeyPadButton color="purple" value={"Delete"} onClick={(e) => {
                            deleteCellValue();
                            e.stopPropagation();
                        }}/>
                    </td>
                </tr>
                <tr style={{height: '10%'}}>
                    <td colSpan={3}>
                        <KeyPadButton color="#401153" value={"Save"} onClick={(e) => {
                            savePuzzle();
                            e.stopPropagation();
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <KeyPadButton color="#401153" value={"Create"} onClick={(e) => {
                            createPuzzle();
                            e.stopPropagation();
                        }}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyPad);