import React from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";
import ProfileMainContent from "./ProfileMainContent";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(state.profile, [
            "profile",
            "createdPuzzles",
            "savedPuzzles"
        ])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const Profile = (props) => {
    const {
        profile,
        savedPuzzles,
        createdPuzzles,
        actions
    } = props;

    return(
        <div className='container-fluid'>
            <div className='row justify-content-center p-3'>
                <div className='col-2 border rounded-3'>
                    <h1 className='text-break'>{profile.username}</h1>
                    <br/>
                    <p className='text-break'>Email: {profile.email}</p>
                    <p className='text-break'>Score: {profile.score}</p>
                </div>
                <div className='col-8 text-center justify-content-center'>
                    <ProfileMainContent
                        savedPuzzles={savedPuzzles}
                        createdPuzzles={createdPuzzles}/>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);