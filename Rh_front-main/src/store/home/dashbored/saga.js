import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_DASHBOREDS,

} from "./actionTypes"
import {
  getDashboredsFail,
  getDashboredsSuccess,
 
} from "./actions"

//Include Both Helper File with needed methods
import {
  getDashboreds,
 
} from "../../../helpers/fakebackend_helper"


function* fetchDashboreds() {
  console.log("fetch sec personne")
  try {
    const response = yield call(getDashboreds)
    console.log("res",response)
    yield put(getDashboredsSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getDashboredsFail(error))
  }
}


function* dashboredSaga() {

  yield takeEvery(GET_DASHBOREDS, fetchDashboreds)


}

export default dashboredSaga
