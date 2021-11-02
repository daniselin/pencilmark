import React from "react";
import {bindActionCreators} from "redux";
import {pick} from "lodash";
import {useEffect} from "react";
import {actions as timerActions} from "../index";
import {connect} from "react-redux";
import {formatTime} from "../../utils";

const mapStateToProps = (state) => {
    return {
        ...pick(state.timer, ["isOn", "time"]),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            stopTimer: timerActions.stopTimer,
            startTimer: timerActions.startTimer,
            tick: timerActions.tick,
        }, dispatch)};
};


const Timer = (props) => {

    const {
        isOn,
        time,
        actions
    } = props;

    const {
        stopTimer,
        startTimer,
        tick
    } = actions;

    useEffect(() => {
        let interval = null;
        if (isOn) {
            interval = setInterval(() => {
                tick();
            }, 1000);
        } else if (!isOn && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isOn, time]);

    return (
            <div className="h4 justify-content-end text-end">
                {formatTime(time)}
            </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);