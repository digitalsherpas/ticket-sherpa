let nextToDoId = 0;

export const addToDo = (text) => ({
  type: 'ADD_TODO',
  id: nextToDoId,
  text
});