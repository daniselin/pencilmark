import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";
import Header from "../../layout/Header";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(state.user, [
            "username",
            "id",
            "email",
            "score"
        ]),
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
        username,
        email,
        score,
        id,
        profile,
        savedPuzzles,
        createdPuzzles,
        actions
    } = props;

    const [section, setSection] = useState("");

    const onClick = useCallback((event) => {
        setSection(event.target.id);
        console.log(section);
    });

    return(
        <div className='container-fluid'>
            <div className='row justify-content-center p-3'>
                <div className='col-2 border rounded-3'>
                    <h1>{username}</h1>
                    <br/>
                    <p>Email: {email}</p>
                    <p>Score: {score}</p>
                </div>
                <div className='col-8 text-center justify-content-start'>
                    <nav className='navbar navbar-expand-lg'>
                        <ul className="nav navbar-nav">
                            {profile === id &&
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
                    <div>
                        {section}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);