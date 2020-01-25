import React from "react";
import styles from "./styles.module.scss";

const Btn = props => {
  const { onClick, type } = props;

  const types = {
    del: "x",
    edit: "edit"
  };

  return (
    <button className={styles[type]} type="button" onClick={onClick}>
      {types[type]}
    </button>
  );
};

export default Btn;
