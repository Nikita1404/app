/* eslint-disable import/prefer-default-export */
import { SET_POSTS } from "./reducer";

export const setPostsActionType = posts => ({
  type: SET_POSTS,
  payload: { posts }
});
