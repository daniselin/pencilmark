import React from "react";
import {connect} from "react-redux";
import {map} from "lodash";
import SavedPuzzle from "./SavedPuzzle";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "..";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            selectSavedPuzzle: profileActions.selectSavedPuzzle,
        }, dispatch)};
};

const SavedPuzzles = (props) => {
    const {
        savedPuzzles,
        width,
        actions
    } = props;

    const {
        selectSavedPuzzle
    } = actions;

    return(
        <div className='container-fluid'>
            <div className="row">
            {map(savedPuzzles, (puzzle, i) =>
                <div className={width < 970 ? "col-6" : "col-4"}>
                    <SavedPuzzle key={puzzle["name"]} puzzle={puzzle} onClick={(e) => {selectSavedPuzzle(i)}}/>
                </div> )}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedPuzzles);