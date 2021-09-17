import React from "react";
import {connect} from "react-redux";
import {map} from "lodash";
import CreatedPuzzle from "./CreatedPuzzle";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CreatedPuzzles = (props) => {
    const {
        createdPuzzles,
        width
    } = props;

    console.log(width)

    return(
        <div className='container-fluid'>
            <div className="row">
                {map(createdPuzzles, (puzzle, i) =>
                    <div key={puzzle["name"]} className={width < 970 ? "col-6" : "col-4"}>
                        <CreatedPuzzle puzzle={puzzle}/>
                    </div> )}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPuzzles);