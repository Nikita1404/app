import React from "react";
import Btn from "components/shared/Btn";
import styles from "./styles.module.scss";

const AddForm = props => {
  const { isShow, hide, onSubmit } = props;

  if (!isShow) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <form onSubmit={onSubmit} className={styles.root}>
        <Btn type="del" onClick={hide} />

        <input name="title" type="text" placeholder="Title" />
        <input name="seo_url" type="text" placeholder="Seo url" />
        <label htmlFor="#status-post">
          Post status
          <input name="status" id="status-post" type="checkbox" />
        </label>
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
