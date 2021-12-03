import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate, formatTime} from "../../utils";
import SmallGrid from "../../SmallGrid";
import '../../selectable.css'


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CompletedPuzzle = (props) => {
    const {
        puzzle,
    } = props;

    const onClick = useCallback ((e) => {
        const {onClick, } = props;

        if (onClick) {
            onClick(e);
        }
    }, [props]);

    return(
        <div className='card mb-2 selectable' onClick={(e) => onClick(e)}>
            <div className='card-header'>
                {puzzle["name"]} by {puzzle["creator_username"]}
            </div>
            <div className='card-body'>
                <SmallGrid cells={puzzle["given_digits"]}/>
            </div>
            <div className='card-footer'>
                <div>{formatDate(puzzle["date"])} {formatTime(puzzle["time"])}</div>
                <div>Points: {puzzle["score"]}</div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedPuzzle);