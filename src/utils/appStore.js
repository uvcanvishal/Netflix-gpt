import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Assuming you have a moviesSlice defined elsewhere

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer, // Assuming you have a userReducer defined elsewhere
  },
});

export default appStore;