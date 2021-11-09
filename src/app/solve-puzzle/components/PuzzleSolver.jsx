import React, {useCallback} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import {bindActionCreators} from "redux";
import PuzzleGrid from "./PuzzleGrid";
import KeyPad from "./KeyPad";
import Modal from "../../modal/components/Modal";
import Timer from "../../timer/components/Timer";
import {formatTime} from "../../utils";
import RatePuzzle from "./RatePuzzle";
import NotAuthenticated from "../../NotAuthenticated";
import {actions as solvePuzzleActions} from "../index";
import SuccessMessage from "../../messages/components/SuccessMessage";
import ErrorMessage from "../../messages/components/ErrorMessage";


const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, ["loadedPuzzle", "currentDigits"]),
        ...pick(state.windowSize, ["width"]),
        ...pick(state.timer, ["time"]),
        ...pick(state.user, ["hasAuthenticated"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            rotateEnterMode: solvePuzzleActions.rotateEnterMode
        }, dispatch)};
};

const PuzzleSolver = (props) => {
    const {
        currentDigits,
        loadedPuzzle,
        width,
        time,
        hasAuthenticated,
        actions,
        onViewPuzzle,
        onCompletePuzzle
    } = props;

    const {
        rotateEnterMode
    } = actions;

    const viewPuzzle = useCallback((id) => {
        onViewPuzzle(id);
        onCompletePuzzle();
    }, [onViewPuzzle, onCompletePuzzle]);

    const goBack = useCallback(() => {
        window.history.back();
        onCompletePuzzle();
    }, [onCompletePuzzle]);

    return(
        <div className='container'>
            {hasAuthenticated ?
                <>
                    <Modal
                        id="solve-puzzle"
                        onSubmit={viewPuzzle}
                        onManualDestroy={goBack}
                        submitLabel={"View Puzzle"}
                        cancelLabel={"Go Back"}
                        cancelColor={"danger"}
                        submitColor={"primary"}
                        header="You've completed the puzzle!">
                        <p>Congratulations! You completed this puzzle in {formatTime(time)}.</p>
                        <RatePuzzle/>
                    </Modal>
                    <br/>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <h1>{loadedPuzzle.name}</h1>
                        </div>
                        <div className='col-8'>
                            <Timer/>
                        </div>
                    </div>
                    <br/>
                    <div className='row justify-content-around'>
                        <div className={width > 970 ? 'col-6' : 'col-12'}>
                            <PuzzleGrid/>
                        </div>
                        <div className={width > 970 ? 'col-5' : 'col-12'}>
                            <KeyPad rotateEnterMode={rotateEnterMode}/>
                            <br/>
                            <SuccessMessage/>
                            <ErrorMessage/>
                        </div>
                    </div>
                </>
                :
                <NotAuthenticated/>
            }
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleSolver);