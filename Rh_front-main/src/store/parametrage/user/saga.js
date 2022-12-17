import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_USERS,
  ADD_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER
} from "./actionTypes"
import {
  getUsersFail,
  getUsersSuccess,
  addUserFail,
  addUserSuccess,
  updateUserFail,
  updateUserSuccess,
  deleteUserSuccess,
  deleteUserFail, getUserSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getUsers,
  addNewUser,
  updateUser,
  deleteUser, getUser
} from "../../../helpers/fakebackend_helper"


function* fetchUsers() {
  console.log("fetch saga")
  try {
    const response = yield call(getUsers)
    console.log("res",response)
    yield put(getUsersSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getUsersFail(error))
  }
}
function* onAddNewUser({ payload: event }) {
  try {
    const response = yield call(addNewUser, event)
     console.log("new saga",response)
    yield put(addUserSuccess(response))
  } catch (error) {
    yield put(addUserFail(error))
  }
}

function* fetchUser({ payload: user }) {
  try {
    console.log("kkk",user)
    const response = yield call(getUser, user)
    console.log("gettttt saga",response)
    yield put(getUserSuccess(response))
  } catch (error) {
  // yield put(updateUserFail(error))
  }
}

function* onUpdateUser({ payload: user }) {
  try {
    const response = yield call(updateUser, user)
    console.log("update saga",response)
    yield put(updateUserSuccess(response))
  } catch (error) {
    yield put(updateUserFail(error))
  }
}

function* onDeleteUser({ payload: user }) {
  try {
    
    const response = yield call(deleteUser, user)
    yield put(deleteUserSuccess(response))
  } catch (error) {
    yield put(deleteUserFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_USERS, fetchUsers)
  yield takeEvery(GET_USER, fetchUser)
  yield takeEvery(ADD_NEW_USER, onAddNewUser)
  yield takeEvery(UPDATE_USER, onUpdateUser)
  yield takeEvery(DELETE_USER,onDeleteUser )

}

export default banqueSaga
