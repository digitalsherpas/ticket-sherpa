const event = {
  eventName: 'Leonard\'s birthday bonanza',
  date: '10/10/16',
  time: '5:30pm',
  address: '944 Market St, San Francisco, CA 94103',
  price: 100000000000
}

const eventDetailsReducer = (state = event, action) => {
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

export default eventDetailsReducer