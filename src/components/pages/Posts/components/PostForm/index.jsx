import React from "react";
import Btn from "components/shared/Btn";
import styles from "./styles.module.scss";

const PostForm = props => {
  const { isShow, hide, onSubmitEdit, onSubmitCreate, post } = props;

  console.log(post);

  if (!isShow) {
    return null;
  }

  const {
    id,
    title,
    short_description,
    full_description,
    status,
    seo_url
  } = post;

  const onSubmit = id ? onSubmitEdit : onSubmitCreate;
  const formText = id ? "Edit post" : "Create post";

  return (
    <div className={styles.wrap}>
      <form onSubmit={onSubmit} className={styles.root}>
        <h4>{formText}</h4>
        <Btn type="del" onClick={hide} />

        <input
          defaultValue={title}
          name="title"
          type="text"
          placeholder="Title"
        />

        <input
          defaultValue={seo_url}
          name="seo_url"
          type="text"
          placeholder="Seo url"
        />

        <label htmlFor="#status-post">
          Post status
          <input
            defaultChecked={status}
            name="status"
            id="status-post"
            type="checkbox"
          />
        </label>

        <input
          defaultValue={short_description}
          name="short_description"
          type="text"
          placeholder="Short description"
        />

        <textarea
          defaultValue={full_description}
          name="full_description"
          placeholder="Full description"
        />

        <button className={styles.create} type="submit">
          Create post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
