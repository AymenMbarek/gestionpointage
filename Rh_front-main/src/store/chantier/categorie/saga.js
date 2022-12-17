import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_CATEGORIES,
  ADD_NEW_CATEGORIE,
  UPDATE_CATEGORIE,
  DELETE_CATEGORIE
} from "./actionTypes"
import {
  getCategoriesFail,
  getCategoriesSuccess,
  addCategorieFail,
  addCategorieSuccess,
  updateCategorieFail,
  updateCategorieSuccess,
  deleteCategorieSuccess,
  deleteCategorieFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getCategories,
  addNewCategorie,
  updateCategorie,
  deleteCategorie
} from "../../../helpers/fakebackend_helper"


function* fetchCategories() {
  console.log("fetch saga")
  try {
    const response = yield call(getCategories)
    console.log("res",response)
    yield put(getCategoriesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getCategoriesFail(error))
  }
}
function* onAddNewCategorie({ payload: event }) {
  console.log("ch",event)
  try {
    const response = yield call(addNewCategorie, event)
     console.log("new saga",response)
    yield put(addCategorieSuccess(response))
  } catch (error) {
    yield put(addCategorieFail(error))
  }
}

function* onUpdateCategorie({ payload: categorie }) {
  try {
    const response = yield call(updateCategorie, categorie)
    console.log("update saga",response)
    yield put(updateCategorieSuccess(response))
  } catch (error) {
    yield put(updateCategorieFail(error))
  }
}

function* onDeleteCategorie({ payload: categorie }) {
  try {
    
    const response = yield call(deleteCategorie, categorie)
    yield put(deleteCategorieSuccess(response))
  } catch (error) {
    yield put(deleteCategorieFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_CATEGORIES, fetchCategories)
  yield takeEvery(ADD_NEW_CATEGORIE, onAddNewCategorie)
  yield takeEvery(UPDATE_CATEGORIE, onUpdateCategorie)
  yield takeEvery(DELETE_CATEGORIE,onDeleteCategorie )

}

export default banqueSaga
