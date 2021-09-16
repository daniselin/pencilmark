import { all } from "redux-saga/effects"
import { union } from "lodash"
import user from "../app/user/sagas/user";
import buildPuzzle from "../app/build-puzzle/sagas/buildPuzzle";

export default function* createRootSaga() {
    yield all(
        union(
            user(),
            buildPuzzle()
        )
    );
}