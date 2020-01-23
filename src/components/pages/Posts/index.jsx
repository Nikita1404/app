import React, { useState } from "react";
import List from "./components/List";
import Nav from "./components/Nav";
import AddForm from "./components/AddForm";
import { fetchCreatePost } from "./helpers";

const Posts = () => {
  const [state, setState] = useState({
    isShowAddForm: false
  });

  const showAddForm = () =>
    setState({
      ...state,
      isShowAddForm: true
    });

  const hideAddForm = () =>
    setState({
      ...state,
      isShowAddForm: false
    });

  const createPost = e => {
    e.preventDefault();

    const dataSend = {
      title: e.target.title.value,
      short_description: e.target.short_description.value,
      full_description: e.target.full_description.value,
      status: true,
      seo_url: e.target.title.value
    };

    fetchCreatePost(dataSend);
  };

  return (
    <>
      <Nav showAddForm={showAddForm} />
      <List />
      <AddForm
        onSubmit={createPost}
        hide={hideAddForm}
        isShow={state.isShowAddForm}
      />
    </>
  );
};

export default Posts;
