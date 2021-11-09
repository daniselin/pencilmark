import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate, formatTime} from "../../utils";
import SmallGrid from "../../SmallGrid";
import '../../selectable.css'
import {DropdownButton, Dropdown} from "react-bootstrap";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SavedSolution = (props) => {
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
        <div className='card mb-2 selectable'>
            <div className='card-header justify-content-end'>
                {puzzle["saved_solution"]["name"]}
            </div>
            <div className='card-body'  onClick={(e) => onClick(e)}>
                <SmallGrid cells={puzzle["saved_solution"]["given_digits"]}/>
            </div>
            <div className='card-footer'>
                <div>
                    Saved on: {formatDate(puzzle["date"])}
                </div>
                <div>
                    Time: {formatTime(puzzle["time"])}
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedSolution);