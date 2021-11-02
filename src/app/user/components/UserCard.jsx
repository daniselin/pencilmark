import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate} from "../../utils";
import '../../selectable.css'
import blank_profile from "../../blank_profile.png";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "../../profile";
import {actions as userActions} from "../index";
import {pick} from "lodash/object";


const mapStateToProps = (state) => {
    return {...pick(state.profile, [
            "isFollowActionLoading",
        ]),
        ...pick(state.user, [
            "id",
        ]),};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            followUnfollow: profileActions.followUnfollow
        }, dispatch)}
};

const UserCard = (props) => {
    const {
        user,
        id,
        isFollowing,
        isFollowActionLoading,
        actions
    } = props;

    const {
        followUnfollow
    } = actions;

    const onClick = useCallback((e) => {
        const {onClick} = props;
        onClick && onClick(e);
    }, [props]);

    const onFollow = useCallback((event) => {
        followUnfollow(user.id);
    }, [followUnfollow, user]);

    return(
        <div className='card mb-2 selectable'>
            <div className='card-header'>
                {user["username"]}
            </div>
            <div className='card-body' onClick={onClick}>
                <img src={blank_profile}/>
            </div>
            <div className='card-footer'>
                <div>Email: {user["email"]}</div>
                <div>Score: {user["score"]}</div>
                {user.id !== id &&
                    <button
                        id="follow"
                        className={'btn ' + (!isFollowing ? 'btn-primary' : 'btn-outline-primary')}
                        onClick={(e) => onFollow(e)}
                        disabled={isFollowActionLoading}>
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                }
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);