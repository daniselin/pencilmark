import React from "react";
import {connect} from "react-redux";
import {map, pick} from "lodash";
import SavedPuzzle from "./SavedPuzzle";
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
            selectSavedPuzzle: profileActions.selectSavedPuzzle,
            destroyModal: modalActions.destroyModal,
            deleteSavedPuzzle: profileActions.deleteSavedPuzzle,
            resumeSavedPuzzle: profileActions.resumeSavedPuzzle,
            confirmDelete: profileActions.confirmDelete
        }, dispatch)};
};

const SavedPuzzles = (props) => {
    const {
        savedPuzzles,
        selectedPuzzle,
        width,
        actions
    } = props;

    const {
        selectSavedPuzzle,
        destroyModal,
        resumeSavedPuzzle,
        confirmDelete,
        deleteSavedPuzzle
    } = actions;

    return(
        <>
            <Modal
                id="saved-puzzle"
                onSubmit={resumeSavedPuzzle}
                onManualDestroy={destroyModal}
                onDelete={confirmDelete}
                submitLabel={"Resume Building"}
                cancelLabel={"Return"}
                deleteLabel={"Delete Puzzle"}
                cancelColor={"secondary"}
                deleteColor={"danger"}
                submitColor={"primary"}
                header={"Resume working on this puzzle?"}>
                <SavedPuzzle puzzle={selectedPuzzle}/>
            </Modal>
            <Modal
                id="delete-confirmation"
                onSubmit={deleteSavedPuzzle}
                onManualDestroy={destroyModal}
                submitLabel={"Yes"}
                cancelLabel={"No"}
                cancelColor={"secondary"}
                submitColor={"danger"}
                header={"Are you sure you want to delete this puzzle?"}>
                <SavedPuzzle puzzle={selectedPuzzle}/>
            </Modal>
            <SuccessMessage/>
            <div className='container-fluid'>
                <div className="row">
                {map(savedPuzzles, (puzzle, i) =>
                    <div className={width < 500 ? "col-12": width < 970 ? "col-6" : "col-4"}>
                        <SavedPuzzle key={puzzle["name"]} puzzle={puzzle} onClick={(e) => {selectSavedPuzzle(i)}}/>
                    </div> )}
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedPuzzles);