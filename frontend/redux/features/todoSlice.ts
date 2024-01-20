import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: ["heloo"],
  },
  reducers: {
    push: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    updateText: (state, action) => {
      state.value[action.payload.index] = action.payload.text;
    },
  },
});

export const { push, remove, updateText } = todoSlice.actions;

export default todoSlice.reducer;
