import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Item = ({ post }) => {
  const {
    title,
    short_description: shortDescription,
    date_update: { date }
  } = post;

  const dateValue = new Date(date).toLocaleDateString();

  return (
    <div className={styles.root}>
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
