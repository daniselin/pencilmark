import React, {useCallback} from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";
import ProfileMainContent from "./ProfileMainContent";
import NotAuthenticated from "../../NotAuthenticated";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "..";
import {find} from "lodash";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(state.profile, [
            "profile",
            "createdPuzzles",
            "savedPuzzles",
            "completedPuzzles",
            "isFollowActionLoading",
            "isFollowing"
        ]),
        ...pick(state.user, [
            "hasAuthenticated",
            "id",
            "following"
        ]),
        ...pick(state.windowSize, ["width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            followUnfollow: profileActions.followUnfollow
        }, dispatch)};
};

const Profile = (props) => {
    const {
        profile,
        savedPuzzles,
        createdPuzzles,
        completedPuzzles,
        hasAuthenticated,
        isFollowing,
        isFollowActionLoading,
        id,
        following,
        width,
        actions
    } = props;

    const {
        followUnfollow
    } = actions;

    const onClick = useCallback((event) => {
        followUnfollow(profile.id);
    }, [followUnfollow, profile]);

    const isUserFollowing =
        find(following, (follower) => {
            return follower.following === profile.id
        })

    return(
        <div className='container-fluid'>
            {hasAuthenticated ?
            <div className='row justify-content-center p-3'>
                <div className={(width > 1100 ? 'col-2' : 'col-12') + ' border rounded-3'}>
                    <h1 className='text-break'>{profile.username}</h1>
                    <br/>
                    <p className='text-break'>Email: {profile.email}</p>
                    <p className='text-break'>Score: {profile.score}</p>
                    <p className='text-break'>Followers: {profile.followers ? profile.followers.length : ""}</p>
                    <p className='text-break'>Following: {profile.following ? profile.following.length : ""}</p>
                    {profile.id !== id &&
                    <button
                        id="follow"
                        className={'btn ' + (!isUserFollowing ? 'btn-primary' : 'btn-outline-primary')}
                        onClick={(e) => onClick(e)}
                        disabled={isFollowActionLoading}>
                        {isUserFollowing ? 'Following' : 'Follow'}
                    </button> }
                </div>
                <div className='col-8 text-center justify-content-center'>
                    <ProfileMainContent
                        savedPuzzles={savedPuzzles}
                        createdPuzzles={createdPuzzles}
                        completedPuzzles={completedPuzzles}
                        following={profile.following}
                        followers={profile.followers}
                    />
                </div>
            </div> :
            <NotAuthenticated/>
            }
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);