import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {id: 1, value: "Todo 1", status: "pending"},
    {id: 2, value: "Todo 2", status: "process"},
    {id: 3, value: "Todo 3", status: "cancel"},
    {id: 4, value: "Todo 4", status: "complete"},
  ],
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
    resetTodo: () => [],
  },
});
export const {addTodo, updateTodo, resetTodo} = todosSlice.actions;

export default todosSlice.reducer;
