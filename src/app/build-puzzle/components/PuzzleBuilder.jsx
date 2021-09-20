import React from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import TextField from "../../form/components/TextField";
import PuzzleGrid from "./PuzzleGrid";
import KeyPad from "./KeyPad";
import {bindActionCreators} from "redux";
import {actions as buildPuzzleActions} from "../index";
import ErrorMessage from "../../messages/components/ErrorMessage";


const mapStateToProps = (state) => {
    return {
        ...pick(state.buildPuzzle, ["cells", "errorMessage"]),
        ...pick(state.windowSize, ["height", "width"]),
        ...pick(state.form.values, ["puzzleName"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
        focusOffCells: buildPuzzleActions.focusOffCells,
        removeErrorMessage: buildPuzzleActions.removeErrorMessage
    }, dispatch)};
};

const PuzzleBuilder = (props) => {
    const {
        cells,
        height,
        errorMessage,
        width,
        actions,
        puzzleName
    } = props;

    const {
        focusOffCells,
        removeErrorMessage
    } = actions;


    return(
        <div className='container'>
                <>
                    <br/>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <TextField maxLength={180} autoFocus={true} placeholder={"Puzzle Name"} id={"puzzleName"}
                                       required={true} defaultValue={puzzleName}
                            />
                        </div>
                    </div>
                    {(errorMessage !== "" &&
                        <>
                            <br/>
                            <div className='row justify-content-center'>
                                <div className='col-6'>
                                    <ErrorMessage errorMessage={errorMessage} onClick={(e) => removeErrorMessage(e)}/>
                                </div>
                            </div>
                        </>
                    )}
                    <br/>
                    <div className='row justify-content-around'>
                        <div className={width > 970 ? 'col-6' : 'col-12'}>
                            <PuzzleGrid/>
                        </div>
                        <div className={width > 970 ? 'col-5' : 'col-12'}>
                            <KeyPad/>
                        </div>
                    </div>
                </>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleBuilder);