import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate, formatRating} from "../../utils";
import SmallGrid from "../../SmallGrid";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CreatedPuzzle = (props) => {
    const {
        puzzle
    } = props;

    const onClick = useCallback ((e) => {
        const {onClick, } = props;

        if (onClick) {
            onClick(e);
        }
    }, [props]);

    return(
        <div className='card justify-content-center mb-4 selectable' onClick={(e) => onClick(e)}>
            <div className='card-header'>
                {puzzle["name"]}
            </div>
            <div className='containter-fluid card-body justify-content-center'>
                <SmallGrid cells={puzzle["given_digits"]}/>
            </div>
            <div className='card-footer'>
                <div>Created on {formatDate(puzzle["date"])}</div>
                <div>Average Rating: {puzzle["average_rating"] !== 11 ? formatRating(puzzle["average_rating"].toString()) + "/10" : "No ratings"}</div>
                <div>Average Solve Time: {puzzle["average_solve_time"] !== "00:00:00" ? puzzle["average_solve_time"] : "No Solves"}</div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPuzzle);