import React from "react";
import {connect} from "react-redux";
import {pick} from "lodash/object";
import TextField from "../../../form/components/TextField";
import SubmitButton from "../../../form/components/SubmitButton";
import {bindActionCreators} from "redux";
import {actions as userActions} from "../../index";
import {map} from "lodash";
import SavedPuzzle from "../../../profile/components/SavedPuzzle";
import UserCard from "../../components/UserCard";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(ownProps.match, [
            "params"
        ]),
        ...pick(state.user, [
            "userSearchResults"
        ]),
        ...pick(state.windowSize, ["width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            submitSearch: userActions.submitSearch,
            selectProfile: userActions.selectProfile
        }, dispatch)
    };
};

const UserSearchResults = (props) => {
    const {
        params,
        userSearchResults,
        width,
        actions,
    } = props;

    const {
        submitSearch,
        selectProfile
    } = actions;

    const q = params ? params["q"] : "";

    console.log(userSearchResults)

    return(
        <div className="container-fluid justify-content-center">
            <div className="row justify-content-center">
                <div className="col-6">
                    <TextField
                        autoFocus={true}
                        defaultValue={q}
                        placeholder="Search For Users"
                        storeUpdatedValue={false}
                        id="userSearch"
                    />
                </div>
                <div className="col-1">
                    <SubmitButton label="Search" color="primary" onClick={(e) => {submitSearch(document.getElementById("userSearch").value)}}/>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row justify-content-center text-center">
                {map(userSearchResults, (user, i) =>
                    <div className={width < 970 ? "col-6" : "col-4"}>
                        <UserCard key={user["username"]} user={userSearchResults[i]} onClick={(e) => {
                            selectProfile(i)
                        }}/>
                    </div> )}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchResults);