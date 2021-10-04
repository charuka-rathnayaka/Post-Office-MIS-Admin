

import { testSaga } from 'redux-saga-test-plan';
import getComplainDataSaga from '../../../sagas/complainsSaga';


describe ("Complains Saga test",()=>{
    it('works with unit tests', () => {
        

        return expectSaga(userSaga, api)
            .provide([
            [call(getComplainsData), "1001"]
            ])
            .put({
            type: 'RECEIVE_USER',
            })
            .dispatch({ type: 'REQUEST_USER', payload: 42 })
            .run();
      });
})