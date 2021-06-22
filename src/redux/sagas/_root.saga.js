import { all } from 'redux-saga/effects'
import incomeSaga from './income.saga'

export default function* rootSaga() {
    yield all([
        incomeSaga()
    ])
}