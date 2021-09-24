import React from "react";
import {connect} from "react-redux";
import {map} from "lodash";
import CreatedPuzzle from "./CreatedPuzzle";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "../index";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            selectCreatedPuzzle: profileActions.selectCreatedPuzzle,
        }, dispatch)};
};

const CreatedPuzzles = (props) => {
    const {
        createdPuzzles,
        width,
        actions
    } = props;

    const {
        selectCreatedPuzzle
    } = actions;

    return(
        <div className='container-fluid'>
            <div className="row">
                {map(createdPuzzles, (puzzle, i) =>
                    <div key={puzzle["name"]} className={width < 970 ? "col-6" : "col-4"}>
                        <CreatedPuzzle puzzle={puzzle} onClick={(e) => {selectCreatedPuzzle(i)}}/>
                    </div> )}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPuzzles);