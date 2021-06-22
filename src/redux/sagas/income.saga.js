import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'

function* addIncome(action) {
    try {
        const income = action.payload
        console.log(income)
    } catch(err) {
        console.log(err)
    }
}

function* incomeSaga() {
    yield takeEvery('ADD_INCOME', addIncome)
}

export default incomeSaga