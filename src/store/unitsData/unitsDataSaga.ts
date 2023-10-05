import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_UNITS_REQUEST, getUnitsRequestSuccess } from './unitsDataActions'
import { getUnitsData } from '../../service';

function* fetchData(): Generator<any, void, any> {
    try {
        const data = yield call(getUnitsData)
        yield put(getUnitsRequestSuccess(data))
    } catch (err) {
        console.log('err', err)
    }
}
export default function* unitsDataSaga() {
    yield takeEvery(GET_UNITS_REQUEST, fetchData)
}