import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as solvePuzzleActions} from "../index";
import KeyPadButton from "./KeyPadButton";
import {pick} from "lodash";
import {index} from "../../utils";


const mapStateToProps = (state) => {
    return {
        ...pick(state.windowSize, ["height", "width"]),
        ...pick(state.solvePuzzle, ["loadedPuzzle", "isSaving"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            changeCellValue: solvePuzzleActions.changeCellValue,
            deleteCellValue: solvePuzzleActions.deleteCellValue,
            changeEnterMode: solvePuzzleActions.changeEnterMode,
            savePuzzle: solvePuzzleActions.savePuzzle
        }, dispatch)};
};

const KeyPad = (props) => {
    const {
        width,
        isSaving,
        actions
    } = props;

    const {
        changeCellValue,
        deleteCellValue,
        changeEnterMode,
        savePuzzle
    } = actions;

    const keyPadStyle = {
        height: width * .2,
        width: (width * .2)
    }

    const rotateEnterMode = useCallback ((e) => {
        e.preventDefault();
        if (e.key === " ") {
            const {rotateEnterMode} = props;
            if (rotateEnterMode) {
                rotateEnterMode(e.key);
            }
        }
    }, [props]);

    useEffect(() => {
        document.addEventListener('keydown', rotateEnterMode)
        return function cleanup() {
            document.removeEventListener('keydown', rotateEnterMode);
        }
    }, [rotateEnterMode]);

    return(
        <table style={keyPadStyle}>
            <tbody>
                <tr style={{height: "25%"}}>
                    <td style={{width: "25%"}}>
                        <KeyPadButton color="purple" value={1} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(1);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: "25%"}}>
                        <KeyPadButton color="purple" value={2} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(2);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: "25%"}}>
                        <KeyPadButton color="purple" value={3} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(3);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: "25%"}}>
                        <KeyPadButton outline="purple" color="white" value="digit" mode="digit" width={(width * .2)} onClick={(e) =>
                        {
                            changeEnterMode("digit");
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: "25%"}}>
                    <td>
                        <KeyPadButton color="purple" value={4} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(4);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td>
                        <KeyPadButton color="purple" value={5} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(5);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td>
                        <KeyPadButton color="purple" value={6} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(6);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: "25%"}}>
                        <KeyPadButton outline="purple" color="white" value="corner" mode="corner" width={(width * .2)} onClick={(e) =>
                        {
                            changeEnterMode("corner");
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: "25%"}}>
                    <td>
                        <KeyPadButton color="purple" value={7} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(7);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td>
                        <KeyPadButton color="purple" value={8} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(8);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td>
                        <KeyPadButton color="purple" value={9} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(9);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td style={{width: "25%"}}>
                        <KeyPadButton outline="purple" color="white" value="centre" mode="centre" width={(width * .2)} onClick={(e) =>
                        {
                            changeEnterMode("centre");
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: "25%"}}>
                    <td>
                        <KeyPadButton color="purple" value={0} width={(width * .2)} onClick={(e) =>
                        {
                            changeCellValue(0);
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                    <td colSpan={2}>
                        <KeyPadButton color="purple" value={"X"} width={(width * .2)} onClick={(e) => {
                            deleteCellValue();
                            e.stopPropagation();
                        }}/>
                    </td>
                    <td style={{width: "25%"}}>
                        <KeyPadButton outline="purple" color="white" value="colour" mode="colour" width={(width * .2)} onClick={(e) =>
                        {
                            changeEnterMode("colour");
                            e.stopPropagation();
                        }
                        }/>
                    </td>
                </tr>
                <tr style={{height: "25%"}}>
                    <td colSpan={3}>
                        <KeyPadButton outline="purple" color="white" value={isSaving ? "Saving..." : "Save"} width={(width * .2)} onClick={(e) =>
                        {
                            savePuzzle();
                            e.stopPropagation();
                        }
                        }
                        isDisabled={isSaving}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyPad);