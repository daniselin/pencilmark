import React from "react";
import {connect} from "react-redux";
import {map, pick} from "lodash";
import SavedPuzzle from "./SavedPuzzle";


const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SavedPuzzles = (props) => {
    const {
        savedPuzzles,
        width
    } = props;

    return(
        <div className='container-fluid'>
            {map(savedPuzzles, (puzzle, i) =>
                <div className={width < 970 ? "col-6" : "col-4"}>
                    <SavedPuzzle key={puzzle["name"]} puzzle={puzzle}/>
                </div> )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedPuzzles);