import React from "react";
import {connect} from "react-redux";
import {map, pick} from "lodash";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "..";
import CompletedPuzzle from "./CompletedPuzzle";
import {formatTime} from "../../utils";
import RatePuzzle from "../../solve-puzzle/components/RatePuzzle";
import Modal from "../../modal/components/Modal";
import {actions as modalActions} from "../../modal";
import Leaderboard from "./Leaderboard";


const mapStateToProps = (state) => {
    return {
        ...pick(state.profile, [
            "selectedPuzzle",
            "leaderboard"
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            selectCompletedPuzzle: profileActions.selectCompletedPuzzle,
            destroyModal: modalActions.destroyModal,
            viewLeaderboard: profileActions.viewLeaderboard
        }, dispatch)};
};

const CompletedPuzzles = (props) => {
    const {
        completedPuzzles,
        width,
        selectedPuzzle,
        leaderboard,
        actions
    } = props;

    const {
        selectCompletedPuzzle,
        destroyModal,
        viewLeaderboard
    } = actions;

    return(
        <>
            <Modal
                id="completed-puzzle"
                onSubmit={viewLeaderboard}
                onManualDestroy={destroyModal}
                submitLabel={"View Leaderboard"}
                cancelLabel={"Return"}
                cancelColor={"danger"}
                submitColor={"primary"}
                header="You have previously completed this puzzle">
                <CompletedPuzzle puzzle={selectedPuzzle}/>
            </Modal>
            <Modal
                id="completed-puzzle-leaderboard"
                onManualDestroy={destroyModal}
                cancelLabel={"Return"}
                cancelColor={"secondary"}
                header={selectedPuzzle["name"] + " Leaderboard"}>
                <Leaderboard leaderboard={leaderboard}/>
            </Modal>
            <div className='container-fluid'>
                <div className="row">
                    {map(completedPuzzles, (puzzle, i) =>
                        <div className={width < 970 ? "col-6" : "col-4"}>
                            <CompletedPuzzle key={puzzle["name"]} puzzle={puzzle} onClick={(e) => {selectCompletedPuzzle(i)}}/>
                        </div> )}
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedPuzzles);