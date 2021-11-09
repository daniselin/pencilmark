import React from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";
import TextField from "../../form/components/TextField";
import SubmitButton from "../../form/components/SubmitButton";
import {bindActionCreators} from "redux";
import {actions as puzzleActions} from "../index";
import {map} from "lodash";
import CompletedPuzzle from "../../profile/components/CompletedPuzzle";
import CreatedPuzzle from "../../profile/components/CreatedPuzzle";
import {actions as profileActions} from "../../profile";
import Modal from "../../modal/components/Modal";
import {actions as modalActions} from "../../modal";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(ownProps.match, [
            "params"
        ]),
        ...pick(state.searchPuzzle, [
            "puzzleSearchResults",
            "selectedPuzzle"
        ]),
        ...pick(state.windowSize, ["width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            submitSearch: puzzleActions.submitSearch,
            solvePuzzle: puzzleActions.solvePuzzle,
            selectCreatedPuzzle: puzzleActions.selectCreatedPuzzle,
            destroyModal: modalActions.destroyModal
        }, dispatch)
    };
};

const PuzzleSearchResults = (props) => {
    const {
        params,
        puzzleSearchResults,
        selectedPuzzle,
        width,
        actions,
    } = props;

    const {
        submitSearch,
        selectCreatedPuzzle,
        solvePuzzle,
        destroyModal
    } = actions;

    const q = params ? params["q"] : "";

    return(
        <>
            <div className="container-fluid justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-6 text-center justify-content-center">
                        <Modal
                            id="search-puzzle"
                            onSubmit={solvePuzzle}
                            onManualDestroy={destroyModal}
                            submitLabel={"Solve Puzzle"}
                            cancelLabel={"Return"}
                            cancelColor={"danger"}
                            submitColor={"primary"}
                            header={"Attempt this puzzle?"}>
                            <CreatedPuzzle puzzle={selectedPuzzle}/>
                        </Modal>
                        <TextField
                            autoFocus={true}
                            defaultValue={q}
                            placeholder="Search For Puzzles"
                            storeUpdatedValue={false}
                            id="puzzleSearch"
                        />
                    </div>
                    <div className="col-1">
                        <SubmitButton label="Search" color="primary" onClick={(e) => {submitSearch(document.getElementById("puzzleSearch").value)}}/>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row justify-content-center text-center">
                    {map(puzzleSearchResults, (puzzle, i) =>
                        <div className={width < 970 ? "col-6" : "col-4"}>
                            <CreatedPuzzle puzzle={puzzle} onClick={(e) => {selectCreatedPuzzle(i)}}/>
                        </div> )}
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleSearchResults);