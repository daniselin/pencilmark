import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate} from "../../utils";
import SmallGrid from "../../SmallGrid";
import '../../selectable.css'
import {DropdownButton, Dropdown} from "react-bootstrap";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SavedPuzzle = (props) => {
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
                {puzzle["name"]}
            </div>
            <div className='card-body'  onClick={(e) => onClick(e)}>
                <SmallGrid cells={puzzle["given_digits"]}/>
            </div>
            <div className='card-footer'>
                {formatDate(puzzle["date"])}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedPuzzle);