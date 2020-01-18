import React, { useState, useEffect } from "react";
import { getListPosts } from "components/pages/Posts/helpers";
import Item from "../Item";

const List = () => {
  const [state, setState] = useState({
    posts: []
  });

  useEffect(() => {
    getListPosts().then(data =>
      setState({
        ...state,
        posts: data.posts
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state.posts.map(post => {
    return <Item key={post.id} post={post} />;
  });
};

export default List;
