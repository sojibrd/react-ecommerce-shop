import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
