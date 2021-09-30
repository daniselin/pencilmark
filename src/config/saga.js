import {all} from "redux-saga/effects"
import {union} from "lodash"
import user from "../app/user/sagas/user";
import buildPuzzle from "../app/build-puzzle/sagas/buildPuzzle";
import profile from "../app/profile/sagas/profile";
import solvePuzzle from "../app/solve-puzzle/sagas/solvePuzzle";
import modalControl from "../app/modal/sagas/control";

export default function* createRootSaga() {
    yield all(
        union(
            user(),
            buildPuzzle(),
            profile(),
            solvePuzzle(),
            modalControl()
        )
    );
}