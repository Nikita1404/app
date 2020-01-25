import React from "react";
import PropTypes from "prop-types";
import Btn from "components/shared/Btn";
import styles from "./styles.module.scss";

const Item = ({ post, removePost }) => {
  const {
    id,
    title,
    short_description: shortDescription,
    date_update: { date }
  } = post;

  const dateValue = new Date(id).toLocaleDateString();
  const remove = () => removePost(id);

  return (
    <div className={styles.root}>
      <Btn type="del" onClick={remove} />

      <span>{dateValue}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{shortDescription}</p>
    </div>
  );
};

Item.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    date_update: PropTypes.object,
    short_description: PropTypes.string
  }).isRequired
};

export default Item;
