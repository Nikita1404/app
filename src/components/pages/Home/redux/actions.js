import { POSTS_URL, API_KEY } from "config/api";
import { setPostsAction } from "action/Types";

export const fetchListPostsAction = dispatch => {
  const url = `${POSTS_URL}?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.result) {
        dispatch({ type: "SET_POSTS", payload: { posts: [] } });
      }
      return data.posts;
    });
};

export const fetchRemovePostAction = postId => {
  const url = `${POSTS_URL}/${postId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
};

export const fetchCreatePostAction = data => {
  const url = `${POSTS_URL}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const fetchEditPostAction = (data, postId) => {
  const url = `${POSTS_URL}/${postId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const initialPost = {
  id: null,
  title: "",
  short_description: "",
  full_description: "",
  status: false,
  seo_url: ""
};
