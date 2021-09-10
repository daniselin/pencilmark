import {pick} from "lodash";
import {bindActionCreators} from "redux";
import {actions as userActions} from "../../user";
import MainContainer from "../../layout/MainContainer";
import React from "react";
import {connect} from "react-redux";
import PuzzleGrid from "./PuzzleGrid";
import TextField from "../../form/components/TextField";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            initializeBuildPuzzle: userActions.initializeBuildPuzzle
        }, dispatch)
    };
};

const BuildPuzzle = (props) => {
    return(
        <MainContainer section="build-puzzle"
                       title={<h1>Build a Puzzle</h1>}>
                <PuzzleGrid />
        </MainContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildPuzzle);