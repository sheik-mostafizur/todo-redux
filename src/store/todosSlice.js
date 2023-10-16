import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {id: 1, value: "Hello Todo", status: "pending"},
    {id: 2, value: "Hello Todo", status: "pending"},
    {id: 3, value: "Hello Todo", status: "pending"},
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        value: action.payload,
        status: "pending",
      };
      state.push(todo);
    },
  },
});
export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer;
