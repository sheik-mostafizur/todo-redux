import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {id: 1, value: "Hello Todo", status: "pending"},
    {id: 2, value: "Hello Todo", status: "pending"},
    {id: 3, value: "Hello Todo", status: "pending"},
  ],
  reducers: {},
});

export default todosSlice.reducer;
