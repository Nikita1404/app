import React from "react";
import styles from "./styles.module.scss";

const AddForm = props => {
  const { isShow, hide, onSubmit } = props;

  if (!isShow) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <form onSubmit={onSubmit} className={styles.root}>
        <button className={styles.close} type="button" onClick={hide}>
          x
        </button>
        <input name="title" type="text" placeholder="Title" />
        <input
          name="short_description"
          type="text"
          placeholder="Short description"
        />
        <textarea name="full_description" placeholder="Full description" />
        <button className={styles.create} type="submit">
          Create post
        </button>
      </form>
    </div>
  );
};

export default AddForm;
