import {all} from "redux-saga/effects"
import {union} from "lodash"
import user from "../app/user/sagas/user";
import buildPuzzle from "../app/build-puzzle/sagas/buildPuzzle";
import profile from "../app/profile/sagas/profile";
import solvePuzzle from "../app/solve-puzzle/sagas/solvePuzzle";
import modalControl from "../app/modal/sagas/control";
import search from "../app/user/sagas/search";
import searchPuzzle from "../app/search-puzzle/sagas/search";

export default function* createRootSaga() {
    yield all(
        union(
            user(),
            buildPuzzle(),
            searchPuzzle(),
            profile(),
            solvePuzzle(),
            modalControl(),
            search(),
        )
    );
}