const events = [
  {
    eventName: 'Leonard\'s birthday bonanza',
    date: '10/10/16',
    time: '5:30pm',
    address: '944 Market St, San Francisco, CA 94103',
    price: 100000000000
  },
  {
    eventName: 'Leg day with Andrew',
    date: '10/9/16',
    time: '12:30pm',
    address: '200 Market St, San Francisco, CA 94103',
    price: 1000000
  },
  {
    eventName: 'Kevin goes to Disneyland',
    date: '10/11/16',
    time: '4:30pm',
    address: 'Disneyland Avenue',
    price: 1000000000000000000000000000
  }
]

const event = (state, action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return {
    //     id: action.id,
    //     text: action.text,
    //     completed: false
    //   }
    // case 'TOGGLE_TODO':
    //   if (state.id !== action.id) {
    //     return state
    //   }

    //   return {
    //     ...state,
    //     completed: !state.completed
    //   }
    default:
      return state
  }
}

const eventsReducer = (state = events, action) => {
  switch (action.type) {
  //   case 'ADD_TODO':
  //     return [
  //       ...state,
  //       todo(undefined, action)
  //     ]
  //   case 'TOGGLE_TODO':
  //     return state.map(t =>
  //       todo(t, action)
  //     )
    default:
      return state
  }
}

export default eventsReducer