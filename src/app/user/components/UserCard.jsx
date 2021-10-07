import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate} from "../../utils";
import '../../selectable.css'
import blank_profile from "../../blank_profile.png";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const UserCard = (props) => {
    const {
        user,
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
                {user["username"]}
            </div>
            <div className='card-body' >
                <img src={blank_profile}/>
            </div>
            <div className='card-footer'>
                Email: {user["email"]} Score: {user["score"]}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);