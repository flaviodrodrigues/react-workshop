
const addTodo = (todos, todo) => {
  return [
    ...todos,
    todo, 
  ];
}

const toggleTodo = (todos, id) => {
  return todos.map((todo) => {
    return todo.id === id ? {...todo, completed: !todo.completed} : todo;
  });
}

const removeTodo = (todos, id) => {
  const index = todos.findIndex(todo => todo.id === id);

  return [
    ...todos.slice(0, index),
    ...todos.slice(index + 1)  
  ];
}

export default function(state= { items: [] }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        items: addTodo(state.items, action.todo),
      };

    case 'TOGGLE_TODO': 
      return {
        items: toggleTodo(state.items, action.id),
      };

    case 'REMOVE_TODO':
      return {
        items: removeTodo(state.items, action.id),
      }

    default:
      return state;

  }
}