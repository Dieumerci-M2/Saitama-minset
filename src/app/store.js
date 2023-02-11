import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../feature/usersSlice";
import postReducer from "../feature/postslice";
// import postsReducer from "../feature/postsslice";

export default configureStore({
  reducer: {
    users: usersReducer,
    postById : postReducer
   
  },
});
