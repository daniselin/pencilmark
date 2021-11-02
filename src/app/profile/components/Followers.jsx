import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as profileActions} from "../index";
import {find, map} from "lodash";
import UserCard from "../../user/components/UserCard";
import {pick} from "lodash/object";
import {actions as userActions} from "../../user";


const mapStateToProps = (state) => {
    return {
        ...pick(state.user, [
            "following"
        ])
    };
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators({
            selectProfile: userActions.selectProfile
        }, dispatch)};
};

const Followers = (props) => {
    const {
        username,
        profileFollowers,
        following,
        width,
        actions
    } = props;

    const {
        selectProfile
    } = actions;

    const select = useCallback((username) => {
            selectProfile(username);
        }, [selectProfile]
    );

    return(
        <div className="row justify-content-center text-center">
            {map(profileFollowers, (user) =>
                <div className={width < 970 ? "col-6" : "col-4"}>
                    <UserCard key={user.username} user={user} isFollowing={
                        find(following, (follower) => {
                            return follower.following === user.id
                        })} onClick={(e) => {select(user.username)}}/>
                </div>)}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);