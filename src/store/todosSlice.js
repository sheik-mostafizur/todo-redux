import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        value: action.payload,
        status: "pending",
      };
      state.unshift(todo);
    },
    updateTodo: (state, action) => {
      const {id, value, status} = action.payload;

      const todoToUpdate = state.find((todo) => todo.id === id);

      if (todoToUpdate && value) {
        todoToUpdate.value = value;
      }

      if (todoToUpdate && status) {
        todoToUpdate.status = status;
      }
    },
  },
});
export const {addTodo, updateTodo} = todosSlice.actions;

export default todosSlice.reducer;
