import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import SavedPuzzles from "./SavedPuzzles";
import CreatedPuzzles from "./CreatedPuzzles";
import {pick} from "lodash";


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
        width,
        actions
    } = props;

    const [section, setSection] = useState("");

    const onClick = useCallback((event) => {
        setSection(event.target.id);
        console.log(section);
    });

    console.log(profile.id, id)

    return(
            <>
                <nav className='navbar navbar-expand-lg'>
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
                    </ul>
                </nav>
                <>
                    {section === "createdPuzzles" &&
                    <CreatedPuzzles createdPuzzles={createdPuzzles} width={width}/>
                    }
                    {section === "savedPuzzles" &&
                    <SavedPuzzles savedPuzzles={savedPuzzles} width={width}/>
                    }
                </>
            </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainContent);