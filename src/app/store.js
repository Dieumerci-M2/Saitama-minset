import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../feature/usersSlice";
// import postReducer from "../feature/postSlice";
// import postsReducer from "../feature/postsslice";

export default configureStore({
  reducer: {
    users: usersReducer,
   
  },
});
