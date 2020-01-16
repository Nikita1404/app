import React from "react";
import styles from "./styles.module.scss";

const getListPosts = () => {
  const url =
    "http://blog.api.axenov-it.com/v1/posts?api_key=6533156864bd641cf09188d9d71eae9a";
  return fetch(url).then(response => response.json());
};

const ListPosts = () => {
  getListPosts();
  return <h1>Hello list posts</h1>;
};

export default ListPosts;
