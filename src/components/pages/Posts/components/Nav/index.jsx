import React from "react";
import styles from "./styles.module.scss";

const Nav = props => {
  const { showAddForm } = props;
  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      <button onClick={showAddForm} type="button">
        Add post
      </button>
    </div>
  );
};

export default Nav;
