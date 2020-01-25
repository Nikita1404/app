import React, { useState, useEffect } from "react";
import List from "./components/List";
import Nav from "./components/Nav";
import AddForm from "./components/AddForm";
import { fetchCreatePost, fetchListPosts, fetchRemovePost } from "./helpers";

const Posts = () => {
  const [state, setState] = useState({
    isShowAddForm: false,
    posts: []
  });

  useEffect(() => {
    fetchListPosts().then(data =>
      setState({
        ...state,
        posts: data.posts
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      status: e.target.status.checked,
      seo_url: e.target.seo_url.value
    };

    fetchCreatePost(dataSend).then(data => {
      setState({
        ...state,
        isShowAddForm: false,
        posts: [data.post, ...state.posts]
      });
    });
  };

  const removePost = id => {
    fetchRemovePost(id).then(() => {
      setState({
        ...state,
        posts: state.posts.filter(item => item.id !== id)
      });
    });
  };

  return (
    <>
      <Nav showAddForm={showAddForm} />
      <List posts={state.posts} removePost={removePost} />
      <AddForm
        onSubmit={createPost}
        hide={hideAddForm}
        isShow={state.isShowAddForm}
      />
    </>
  );
};

export default Posts;
