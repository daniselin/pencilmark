import React from "react";
import {connect} from "react-redux";
import PuzzleBox from "./PuzzleCol";
import {bindActionCreators} from "redux";
import {actions as userActions} from "../../user";
import {actions as buildPuzzleActions} from "../index";
import TextField from "../../form/components/TextField";
import KeyPadButton from "./KeyPadButton";
import {pick} from "lodash";


const mapStateToProps = (state) => {
    return {
        ...pick(state.windowSize, ["height", "width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            changeCellValue: buildPuzzleActions.changeCellValue,
            deleteCellValue: buildPuzzleActions.deleteCellValue,
            createPuzzle: buildPuzzleActions.createPuzzle,
            savePuzzle: buildPuzzleActions.savePuzzle
        }, dispatch)};
};

const KeyPad = (props) => {
    const {
        cells,
        selectedCell,
        selectedCells,
        height,
        width,
        actions
    } = props;

    const {
        changeCellValue,
        deleteCellValue,
        createPuzzle,
        savePuzzle
    } = actions;

    const keyPadStyle = {
        height: height
    }

    return(
        <div className='container-fluid justify-content-center' style={keyPadStyle}>
            <div className='row' style={{height: '16%'}}>
                    <TextField required={true} id='puzzle-rules' label="Puzzle Rules: " placeholder="Write rules here..."/>
            </div>
            <div className='row' style={{height: '10%'}}>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={1} onClick={(e) =>
                    {
                        changeCellValue(1);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={2} onClick={(e) =>
                    {
                        changeCellValue(2);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={3} onClick={(e) =>
                    {
                        changeCellValue(3);
                        e.stopPropagation();
                    }
                    }/>
                </div>
            </div>
            <div className='row' style={{height: '10%'}}>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={4} onClick={(e) =>
                    {
                        changeCellValue(4);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={5} onClick={(e) =>
                    {
                        changeCellValue(5);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={6} onClick={(e) =>
                    {
                        changeCellValue(6);
                        e.stopPropagation();
                    }
                    }/>
                </div>
            </div>
            <div className='row' style={{height: '10%'}}>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={7} onClick={(e) =>
                    {
                        changeCellValue(7);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={8} onClick={(e) =>
                    {
                        changeCellValue(8);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={9} onClick={(e) =>
                    {
                        changeCellValue(9);
                        e.stopPropagation();
                    }
                    }/>
                </div>
            </div>
            <div className='row' style={{height: '10%'}}>
                <div className='col-2 g-0'>
                    <KeyPadButton color="purple" value={0} onClick={(e) =>
                    {
                        changeCellValue(0);
                        e.stopPropagation();
                    }
                    }/>
                </div>
                <div className='col-4 g-0'>
                    <KeyPadButton color="purple" value={"Delete"} onClick={(e) => {
                        deleteCellValue();
                        e.stopPropagation();
                    }}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 g-0'>
                    <KeyPadButton color="#401153" value={"Save"} onClick={(e) => {
                        savePuzzle();
                        e.stopPropagation();
                    }}/>
                </div>
                <div className='col-3 g-0'>
                    <KeyPadButton color="#401153" value={"Create"} onClick={(e) => {
                        createPuzzle();
                        e.stopPropagation();
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyPad);