import { createSlice } from "@reduxjs/toolkit";

const NotesSLice = createSlice({
  name: "NotesSlice",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNote } = NotesSLice.actions;
export default NotesSLice.reducer;
