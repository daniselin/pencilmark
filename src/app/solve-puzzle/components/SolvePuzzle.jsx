import {bindActionCreators} from "redux";
import {actions as solveActions} from "..";
import MainContainer from "../../layout/MainContainer";
import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import PuzzleGrid from "../../build-puzzle/components/PuzzleGrid";


const mapStateToProps = (state, ownProps) => {
    return {
        ...pick(ownProps.match, [
            "params"
        ]),
        ...pick(state.solvePuzzle, ["loadedPuzzle"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            initializeSolvePuzzle: solveActions.initializeSolvePuzzle
        }, dispatch)
    };
};

const SolvePuzzle = (props) => {
    const {
        actions,
        params,
        loadedPuzzle
    } = props;

    const {
        id
    } = params;

    const {
        initializeSolvePuzzle
    } = actions;

    const initialize = useCallback((puzzleId) => {
            initializeSolvePuzzle(puzzleId);
        }, [initializeSolvePuzzle]
    );

    useEffect(() => {
        initialize(id);
    }, [id, initialize]);

    return(
        <MainContainer section="solve-puzzle"
                       title={<h1 className='p-3'>{loadedPuzzle.name}</h1>}>
            <PuzzleGrid/>
        </MainContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SolvePuzzle);