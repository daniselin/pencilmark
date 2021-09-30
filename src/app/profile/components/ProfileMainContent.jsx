import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import SavedPuzzles from "./SavedPuzzles";
import CreatedPuzzles from "./CreatedPuzzles";
import {pick} from "lodash";
import CompletedPuzzles from "./CompletedPuzzles";


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
                </>
            </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainContent);