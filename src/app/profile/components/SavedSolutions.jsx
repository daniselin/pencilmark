import React from "react";
import {connect} from "react-redux";
import {map, pick} from "lodash";
import SavedSolution from "./SavedSolution";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "..";
import CreatedPuzzle from "./CreatedPuzzle";
import Modal from "../../modal/components/Modal";
import {actions as modalActions} from "../../modal";
import SuccessMessage from "../../messages/components/SuccessMessage";


const mapStateToProps = (state) => {
    return {...pick(state.profile, [
            "selectedPuzzle",
        ])};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            selectSavedSolution: profileActions.selectSavedSolution,
            destroyModal: modalActions.destroyModal,
            deleteSavedSolution: profileActions.deleteSavedSolution,
            resumeSavedSolution: profileActions.resumeSavedSolution,
            confirmDelete: profileActions.confirmDelete
        }, dispatch)};
};

const SavedSolutions = (props) => {
    const {
        savedSolutions,
        selectedPuzzle,
        width,
        actions
    } = props;

    const {
        selectSavedSolution,
        destroyModal,
        resumeSavedSolution,
        confirmDelete,
        deleteSavedSolution
    } = actions;

    return(
        <>
            <Modal
                id="saved-solution"
                onSubmit={resumeSavedSolution}
                onManualDestroy={destroyModal}
                onDelete={confirmDelete}
                submitLabel={"Resume Solving"}
                cancelLabel={"Return"}
                deleteLabel={"Delete Solution"}
                restartLabel={"Restart Solution"}
                cancelColor={"secondary"}
                deleteColor={"danger"}
                restartColor={"warning"}
                submitColor={"primary"}
                header={"Resume working on this puzzle?"}>
                <SavedSolution puzzle={selectedPuzzle}/>
            </Modal>
            <Modal
                id="delete-confirmation"
                onSubmit={deleteSavedSolution}
                onManualDestroy={destroyModal}
                submitLabel={"Yes"}
                cancelLabel={"No"}
                cancelColor={"secondary"}
                submitColor={"danger"}
                header={"Are you sure you want to delete this solution?"}>
                <SavedSolution puzzle={selectedPuzzle}/>
            </Modal>
            <SuccessMessage/>
            <div className='container-fluid'>
                <div className="row">
                    {map(savedSolutions, (puzzle, i) =>
                        <div className={width < 500 ? "col-12": width < 970 ? "col-6" : "col-4"}>
                            <SavedSolution key={puzzle["name"]} puzzle={puzzle} onClick={(e) => {selectSavedSolution(i)}}/>
                        </div> )}
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedSolutions);