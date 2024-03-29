import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./NotesSLice";
const Store = configureStore({
  reducer: {
    notes: NotesReducer,
  },
});

export default Store;
