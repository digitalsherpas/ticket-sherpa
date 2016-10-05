import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library
import * as types from '../client/actions/index.jsx';
import * as actions from '../client/actions/index.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const testEvent = {
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

describe('events', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should call requestEvents', () => {
    nock('http://localhost:3000')
      .get('/api/events')
      .reply(200, {
        body: {
          events: [
            testEvent,
          ],
        },
      });

    const expectedActions = {
      type: types.REQUEST_EVENTS,
      body: {
        events: [
          testEvent,
        ],
      },
    };
    const store = mockStore({
      events: [],
    });

    return store.dispatch(actions.requestEvents())
      .then(() => {
        const result = store.getActions();
        return expect(result[result.length - 2].type).toEqual(expectedActions.type);
      });
  });
});
