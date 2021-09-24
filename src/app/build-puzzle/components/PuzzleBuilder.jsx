import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import TextField from "../../form/components/TextField";
import PuzzleGrid from "./PuzzleGrid";
import KeyPad from "./KeyPad";
import {bindActionCreators} from "redux";
import {actions as buildPuzzleActions} from "../index";
import ErrorMessage from "../../messages/components/ErrorMessage";
import Modal from "../../modal/components/Modal";


const mapStateToProps = (state) => {
    return {
        ...pick(state.buildPuzzle, ["cells", "errorMessage", "loadedPuzzle", "shouldLoadPuzzle"]),
        ...pick(state.windowSize, ["height", "width"]),
        ...pick(state.form.values, ["puzzleName"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
        onTextFieldFocus: buildPuzzleActions.onTextFieldFocus,
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
        puzzleName,
        loadedPuzzle,
        shouldLoadPuzzle,
        onCreateModal,
        onRebuildPuzzle,
        onStartNewPuzzle
    } = props;

    const {
        onTextFieldFocus,
        removeErrorMessage
    } = actions;

    const rebuildPuzzle = useCallback((id) => {
        onRebuildPuzzle(id);
    }, [onRebuildPuzzle]);

    const startNewPuzzle = useCallback((id) => {
        onStartNewPuzzle(id);
    }, [onStartNewPuzzle]);

    useEffect((id) => {
        (cells !== '_________________________________________________________________________________' && !shouldLoadPuzzle)
        && onCreateModal("build-puzzle", {id: id});
    }, [onCreateModal]);

    return(
        <div className='container'>
            <Modal
                id="build-puzzle"
                onSubmit={rebuildPuzzle}
                onManualDestroy={startNewPuzzle}
                submitLabel={"Resume Building"}
                cancelLabel={"Start Over"}
                cancelColor={"danger"}
                submitColor={"primary"}
                header="Continue building?">
                <p>You started building a puzzle previously. Would you like to continue building that puzzle or start over?</p>
            </Modal>
            <>
                <br/>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <TextField maxLength={180} autoFocus={true} placeholder={"Puzzle Name"} id={"puzzleName"}
                                   required={true} defaultValue={puzzleName} onFocus={(e) => onTextFieldFocus(e)}
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