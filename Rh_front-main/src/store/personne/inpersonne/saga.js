import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_INPERSONNES,

} from "./actionTypes"
import {
  getInpersonnesFail,
  getInpersonnesSuccess,
 
} from "./actions"

//Include Both Helper File with needed methods
import {
  getInpersonnes,
 
} from "../../../helpers/fakebackend_helper"


function* fetchInpersonnes() {
  console.log("fetch personnes internes")
  try {
    const response = yield call(getInpersonnes)
    console.log("res",response)
    yield put(getInpersonnesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getInpersonnesFail(error))
  }
}


function* inpersonneSaga() {

  yield takeEvery(GET_INPERSONNES, fetchInpersonnes)


}

export default inpersonneSaga
