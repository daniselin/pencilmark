import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import SavedPuzzles from "./SavedPuzzles";
import CreatedPuzzles from "./CreatedPuzzles";
import {pick} from "lodash";
import CompletedPuzzles from "./CompletedPuzzles";
import Followers from "./Followers";
import Following from "./Following";


const mapStateToProps = (state, ownProps) => {
    return {...pick(state.windowSize, ["width"]),
        ...pick(state.profile, [
            "profile",
        ]),
        ...pick(state.user, [
            "id",
        ])};
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ProfileMainContent = (props) => {
    const {
        id,
        profile,
        savedPuzzles,
        createdPuzzles,
        completedPuzzles,
        following,
        followers,
        width,
        actions
    } = props;

    const [section, setSection] = useState("");

    const onClick = useCallback((event) => {
        setSection(event.target.id);
    });

    return(
            <>
                <nav className='navbar navbar-expand-lg navbar-expand-sm'>
                    <ul className="nav navbar-nav">
                        {profile.id === id &&
                        <li className='nav-item m-2'>
                            <button id="savedPuzzles" className='btn btn-outline-primary'
                                    onClick={(e) => onClick(e)}>
                                Saved Puzzles
                            </button>
                        </li>
                        }
                        <li className='nav-item m-2'>
                            <button id="createdPuzzles" className='btn btn-outline-primary'
                                    onClick={(e) => onClick(e)}>
                                Created Puzzles
                            </button>
                        </li>
                        <li className='nav-item m-2'>
                            <button id="completedPuzzles" className='btn btn-outline-primary'
                                    onClick={(e) => onClick(e)}>
                                Completed Puzzles
                            </button>
                        </li>
                        <li className='nav-item m-2'>
                            <button id="followers" className='btn btn-outline-primary'
                                    onClick={(e) => onClick(e)}>
                                Followers
                            </button>
                        </li>
                        <li className='nav-item m-2'>
                            <button id="following" className='btn btn-outline-primary'
                                    onClick={(e) => onClick(e)}>
                                Following
                            </button>
                        </li>
                    </ul>
                </nav>
                <>
                    {section === "createdPuzzles" &&
                    <CreatedPuzzles createdPuzzles={createdPuzzles} width={width}/>
                    }
                    {section === "savedPuzzles" &&
                    <SavedPuzzles savedPuzzles={savedPuzzles} width={width}/>
                    }
                    {section === "completedPuzzles" &&
                    <CompletedPuzzles completedPuzzles={completedPuzzles} width={width}/>
                    }
                    {section === "followers" &&
                    <Followers username={profile.username} width={width} profileFollowers={followers}/>
                    }
                    {section === "following" &&
                    <Following username={profile.username} width={width} profileFollowing={following}/>
                    }
                </>
            </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainContent);