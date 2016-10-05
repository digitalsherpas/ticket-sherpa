import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import mocha from 'mocha'; // You can use any testing library
import * as actions from '../client/actions/index.jsx';
import * as types from '../client/actions/index.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

var testEvent = {
  eventName: 'Leonard\'s birthday bonanza',
  price: 100,
  quota: 100,
  eventStartDay: 10,
  eventStartMonth: 10,
  eventStartYear: 2016,
  eventStartTime: 10,
  eventEndDay: 11,
  eventEndMonth: 10,
  eventEndYear: 2016,
  eventEndTime: 10,
  walletAddress: 0x7628b5471ece6c6e8e0e9ea7795842459452f229,
};

describe('async actions', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching events has been done', () => {
    nock('http://localhost:3000')
      .get('/api/events')
      .reply(200, {
        body: {
          events: [
            testEvent,
          ],
        },
      });

    const expectedActions = [
      { type: types.REQUEST_EVENTS },
      // { type: types.FETCH_TODOS_SUCCESS, body: { events: ['do something']  } }
    ];
    const store = mockStore({ events: [] });

    return store.dispatch(actions.requestEvents())
      .then(() => { // return of async actions
        assert(store.events).toEqual(expectedActions);
      });
  });
});
