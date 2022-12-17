import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_SECPERSONNES,

} from "./actionTypes"
import {
  getSecpersonnesFail,
  getSecpersonnesSuccess,
 
} from "./actions"

//Include Both Helper File with needed methods
import {
  getSecpersonnes,
 
} from "../../../helpers/fakebackend_helper"


function* fetchSecpersonnes() {
  console.log("fetch sec personne")
  try {
    const response = yield call(getSecpersonnes)
    console.log("res",response)
    yield put(getSecpersonnesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getSecpersonnesFail(error))
  }
}


function* secpersonneSaga() {

  yield takeEvery(GET_SECPERSONNES, fetchSecpersonnes)


}

export default secpersonneSaga
