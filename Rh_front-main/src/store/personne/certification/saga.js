import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_CERTIFICATS,
  ADD_NEW_CERTIFICAT,
  UPDATE_CERTIFICAT,
  DELETE_CERTIFICAT
} from "./actionTypes"
import {
  getCertificatsFail,
  getCertificatsSuccess,
  addCertificatFail,
  addCertificatSuccess,
  updateCertificatFail,
  updateCertificatSuccess,
  deleteCertificatSuccess,
  deleteCertificatFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getCertificats,
  addNewCertificat,
  updateCertificat,
  deleteCertificat
} from "../../../helpers/fakebackend_helper"


function* fetchCertificats() {
  console.log("fetch certif")
  try {
    const response = yield call(getCertificats)
    console.log("res",response)
    yield put(getCertificatsSuccess(response))
  yield takeEvery(GET_CERTIFICATS, fetchCertificats)
  } catch (error) {
    yield put(getCertificatsFail(error))
  }
}
function* onAddNewCertificat({ payload: event }) {
  try {
    const response = yield call(addNewCertificat, event)
     console.log("saga new",response)
    yield put(addCertificatSuccess(response))
  } catch (error) {
    yield put(addCertificatFail(error))
  }
}

function* onUpdateCertificat({ payload: certificat }) {
  try {
    const response = yield call(updateCertificat, certificat)
    console.log("saga certif",response)
    yield put(updateCertificatSuccess(response))
  } catch (error) {
    yield put(updateCertificatFail(error))
  }
}

function* onDeleteCertificat({ payload: certificat }) {
  try {
    const response = yield call(deleteCertificat, certificat)
    yield put(deleteCertificatSuccess(response))
  } catch (error) {
    yield put(deleteCertificatFail(error))
  }
}

function* certificatSaga() {

  yield takeEvery(GET_CERTIFICATS, fetchCertificats)
  yield takeEvery(ADD_NEW_CERTIFICAT, onAddNewCertificat)
  yield takeEvery(UPDATE_CERTIFICAT, onUpdateCertificat)
  yield takeEvery(DELETE_CERTIFICAT,onDeleteCertificat )

}

export default certificatSaga
