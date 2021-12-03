import React, {useCallback} from "react";
import {connect} from "react-redux";
import {formatDate, formatTime} from "../../utils";
import SmallGrid from "../../SmallGrid";
import '../../selectable.css'


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const Leaderboard = (props) => {
    const {
        leaderboard,
    } = props;

    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Place</th>
                <th scope="col">User</th>
                <th scope="col">Time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{leaderboard.completed_sudoku1_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku1_time)}</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>{leaderboard.completed_sudoku2_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku2_time)}</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>{leaderboard.completed_sudoku3_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku3_time)}</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>{leaderboard.completed_sudoku4_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku4_time)}</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>{leaderboard.completed_sudoku5_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku5_time)}</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>{leaderboard.completed_sudoku6_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku6_time)}</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>{leaderboard.completed_sudoku7_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku7_time)}</td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td>{leaderboard.completed_sudoku8_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku8_time)}</td>
            </tr>
            <tr>
                <th scope="row">9</th>
                <td>{leaderboard.completed_sudoku9_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku9_time)}</td>
            </tr>
            <tr>
                <th scope="row">10</th>
                <td>{leaderboard.completed_sudoku10_user}</td>
                <td>{formatTime(leaderboard.completed_sudoku10_time)}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);