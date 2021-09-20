import {bindActionCreators} from "redux";
import {actions as buildActions} from "..";
import MainContainer from "../../layout/MainContainer";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import PuzzleGrid from "./PuzzleGrid";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {...pick(state.buildPuzzle, ["loadedPuzzle"]),};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            initializeBuildPuzzle: buildActions.initializeBuildPuzzle
        }, dispatch)
    };
};

const BuildPuzzle = (props) => {
    const {
        actions,
        loadedPuzzle
    } = props;

    const {
        initializeBuildPuzzle
    } = actions;

    useEffect(() => {
        initializeBuildPuzzle(loadedPuzzle);
    }, [initializeBuildPuzzle, loadedPuzzle]);

    return(
        <MainContainer section="build-puzzle"
                       title={<h1 className='p-3'>Build a Puzzle</h1>}>
            <PuzzleGrid/>
        </MainContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildPuzzle);