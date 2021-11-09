import React, {useCallback} from "react";
import {connect} from "react-redux";
import {pick} from "lodash";
import {colorMap, isInt} from "../../utils";
import colors from "../../colors.JPG";

const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, [
            "selectedCell",
            "selectedCells",
            "enterMode"
        ]),
        ...pick(state.windowSize, ["height", "width"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const KeyPadCell = (props) => {
    const {
        value,
        onClick,
        width,
        outline,
        color,
        mode,
        enterMode,
        isDisabled
    } = props;


    const changeCellValue = useCallback ((e) => {
        e.stopPropagation();
        const {onClick} = props;
        if (onClick){
            onClick(e);
        };
    }, [props]);

    const fontSize = width * .02;

    let buttonValue = "";
    switch (value) {
        case "digit": {
            const boxStyle = {
                height: fontSize + 10,
                width: fontSize + 10,
                fontSize: fontSize,
                border: mode === enterMode ? "2px solid white" : "2px solid purple"
            }
            buttonValue = <div className="d-flex align-items-center justify-content-center"
                style={boxStyle}> 9
            </div>
            break
        }
        case "corner": {
            const boxStyle = {
                height: fontSize + 10,
                width: fontSize + 10,
                fontSize: fontSize * .38,
                border: mode === enterMode ? "2px solid white" : "2px solid purple",
                verticalAlign: "top",
            }
            buttonValue = <div className="" style={boxStyle}>
                <div className="row align-items-center justify-content-center" style={{height: "33%"}}>
                    <div className="col-2 g-0">
                        1
                    </div>
                    <div className="col-2 g-0">

                    </div>
                    <div className="col-2 g-0">
                        2
                    </div>
                </div>
                <div className="row align-items-center justify-content-center" style={{height: "33%"}}>
                    <div className="col-2 g-0">

                    </div>
                    <div className="col-2 g-0">

                    </div>
                    <div className="col-2 g-0">

                    </div>
                </div>
                <div className="row align-items-center justify-content-center" style={{height: "33%", marginBottom: "2px"}}>
                    <div className="col-2 g-0">

                    </div>
                    <div className="col-2 g-0">

                    </div>
                    <div className="col-2 g-0">

                    </div>
                </div>
            </div>
            break
        }
        case "colour": {
            const boxStyle = {
                height: fontSize + 10,
                width: fontSize + 10,
                fontSize: fontSize * .32,
                border: mode === enterMode ? "2px solid white" : "2px solid purple",
                verticalAlign: "top",
                backgroundImage: "url(" + colors + ")",
                backgroundSize: "cover",
                repeat: false
            }
            buttonValue = <div className="" style={boxStyle}>
            </div>
            break
        }
        case "centre": {
            const boxStyle = {
                height: fontSize + 10,
                width: fontSize + 10,
                fontSize: fontSize * .38,
                border: mode === enterMode ? "2px solid white" : "2px solid purple",
            }
            buttonValue = <div className="d-flex align-items-center justify-content-center" style={boxStyle}>12</div>
            break
        }
        default:
            buttonValue = value
    }

    let buttonStyle = {
        width: "100%",
        height: "100%",
        fontSize: fontSize,
        backgroundColor: enterMode !== mode ? color : "purple",
        color: ((color === "white" && enterMode !== mode) ? "purple" : "white"),
        border: (outline ? "1px solid " + outline : 0),
    };

    if (isInt(value)) {
        switch (enterMode) {
            case "corner": {
                buttonStyle["fontSize"] = fontSize * .5;
                buttonStyle["alignContent"] = "start";
                break;
            }
            case "digit": {
                buttonStyle["justifyContent"] = "center"
                buttonStyle["alignItems"] = "center"
                buttonStyle["fontSize"] = fontSize * .9;
                break
            }
            case "centre": {
                buttonStyle["justifyContent"] = "center"
                buttonStyle["alignItems"] = "center"
                buttonStyle["fontSize"] = fontSize * .5;
                break
            }
            case "colour": {
                const boxStyle = {
                    height: fontSize - 3,
                    width: fontSize - 3,
                    fontSize: fontSize * .32,
                    backgroundColor: colorMap[value]
                }
                buttonStyle["alignItems"] = "center"
                buttonStyle["justifyContent"] = "center"
                buttonValue = <div style={{backgroundColor: "white"}}>
                    <div className="" style={boxStyle}>
                    &nbsp;
                    </div>
                </div>
                break
            }
            default:
                ;
        }
    }

    return(
        <div className='d-flex p-1' style={{height: "100%"}}>
            <button
                className="d-flex btn"
                onClick={(e) => onClick(e)}
                style={buttonStyle}
                disabled={isDisabled}>
                {buttonValue}
            </button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyPadCell);