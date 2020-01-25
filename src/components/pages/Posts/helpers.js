/* eslint-disable import/prefer-default-export */
import { POSTS_URL } from "config/api";

export const fetchListPosts = () => {
  const url = `${POSTS_URL}?api_key=6533156864bd641cf09188d9d71eae9a`;
  return fetch(url).then(response => response.json());
};

export const fetchRemovePost = postId => {
  const url = `${POSTS_URL}/${postId}?api_key=6533156864bd641cf09188d9d71eae9a`;
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
};

export const fetchCreatePost = data => {
  const url = `${POSTS_URL}?api_key=6533156864bd641cf09188d9d71eae9a`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json());
};
