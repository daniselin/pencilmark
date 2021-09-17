import React from "react";
import {connect} from "react-redux";
import {formatDate} from "../../utils/utils";
import SmallGrid from "../../SmallGrid";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SavedPuzzle = (props) => {
    const {
        puzzle
    } = props;

    return(
        <div className='card'>
            <div className='card-header'>
                {puzzle["name"]}
            </div>
            <div className='card-body'>
                <SmallGrid cells={puzzle["given_digits"]}/>
            </div>
            <div className='card-footer'>
                {formatDate(puzzle["date"])}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedPuzzle);