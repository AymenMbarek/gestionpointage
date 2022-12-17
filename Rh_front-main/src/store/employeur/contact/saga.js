import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_CONTACTS,
  ADD_NEW_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from "./actionTypes"
import {
  getContactsFail,
  getContactsSuccess,
  addContactFail,
  addContactSuccess,
  updateContactFail,
  updateContactSuccess,
  deleteContactSuccess,
  deleteContactFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getContacts,
  addNewContact,
  updateContact,
  deleteContact
} from "../../../helpers/fakebackend_helper"


function* fetchContacts() {
  console.log("fetch contact")
  try {
    const response = yield call(getContacts)
    console.log("res",response)
    yield put(getContactsSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getContactsFail(error))
  }
}
function* onAddNewContact({ payload: event }) {
  try {
    const response = yield call(addNewContact, event)
     console.log("add saga",response)
    yield put(addContactSuccess(response))
  } catch (error) {
    yield put(addContactFail(error))
  }
}

function* onUpdateContact({ payload: contact }) {
  try {
    const response = yield call(updateContact, contact)
    console.log("qqq",response)
    yield put(updateContactSuccess(response))
  } catch (error) {
    yield put(updateContactFail(error))
  }
}

function* onDeleteContact({ payload: contact }) {
  try {
    
    const response = yield call(deleteContact, contact)
    yield put(deleteContactSuccess(response))
  } catch (error) {
    yield put(deleteContactFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_CONTACTS, fetchContacts)
  yield takeEvery(ADD_NEW_CONTACT, onAddNewContact)
  yield takeEvery(UPDATE_CONTACT, onUpdateContact)
  yield takeEvery(DELETE_CONTACT,onDeleteContact )

}

export default banqueSaga
