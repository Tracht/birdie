// import { all, spawn } from 'redux-saga/effects';
// import dataSaga from './dataSaga';

// Spawn is an effect that will disconnect the child saga from its parent, 
// allowing it to fail without crashing it's parent.

function* initSaga() {
  yield [];
  // yield all([spawn(dataSaga)]);
}

export default initSaga;