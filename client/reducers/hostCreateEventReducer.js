function addEvents(state = [], action) {
  switch(action.type) {
    case 'ADD_EVENT':
      console.log('here');
    default:
      return state;
  }
  return state;
}