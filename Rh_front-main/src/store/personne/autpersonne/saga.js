import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_AUTPERSONNES,

} from "./actionTypes"
import {
  getAutpersonnesFail,
  getAutpersonnesSuccess,
 
} from "./actions"

//Include Both Helper File with needed methods
import {
  getAutpersonnes,
 
} from "../../../helpers/fakebackend_helper"


function* fetchAutpersonnes() {
  console.log("fetch sec personne")
  try {
    const response = yield call(getAutpersonnes)
    console.log("res",response)
    yield put(getAutpersonnesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getAutpersonnesFail(error))
  }
}


function* autpersonneSaga() {

  yield takeEvery(GET_AUTPERSONNES, fetchAutpersonnes)


}

export default autpersonneSaga
