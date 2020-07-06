import { createStore } from "redux";

const initialState = {
  todolist: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return Object.assign({}, state, {
      todolist: state.todolist.concat(action.payload),
    });
  }

  return state;
};

const store = createStore(reducer);

export default store;
