import React from "react";
import {connect} from "react-redux";
import {map, pick} from "lodash";
import CreatedPuzzle from "./CreatedPuzzle";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "../index";
import CompletedPuzzle from "./CompletedPuzzle";
import Modal from "../../modal/components/Modal";
import {actions as modalActions} from "../../modal";


const mapStateToProps = (state) => {
    return {...pick(state.profile, [
            "selectedPuzzle",
        ])};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            selectCreatedPuzzle: profileActions.selectCreatedPuzzle,
            destroyModal: modalActions.destroyModal,
            solvePuzzle: profileActions.solvePuzzle
        }, dispatch)};
};

const CreatedPuzzles = (props) => {
    const {
        createdPuzzles,
        selectedPuzzle,
        width,
        actions
    } = props;

    const {
        selectCreatedPuzzle,
        destroyModal,
        solvePuzzle
    } = actions;

    return(
        <>
            <Modal
                id="created-puzzle"
                onSubmit={solvePuzzle}
                onManualDestroy={destroyModal}
                submitLabel={"Solve Puzzle"}
                cancelLabel={"Return"}
                cancelColor={"danger"}
                submitColor={"primary"}
                header={"Attempt this puzzle?"}>
                <CreatedPuzzle puzzle={selectedPuzzle}/>
            </Modal>
            <div className='container-fluid'>
                <div className="row">
                    {map(createdPuzzles, (puzzle, i) =>
                        <div key={puzzle["name"]} className={width < 970 ? "col-6" : "col-4"}>
                            <CreatedPuzzle puzzle={puzzle} onClick={(e) => {selectCreatedPuzzle(i)}}/>
                        </div> )}
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPuzzles);