import React from "react";
import { Button } from "../Button";
import { AddNoteBox } from "../AddNoteBox";
import styles from "./header.module.css";
//function handleSubmit

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h1 className={styles.title}> Add Notes here</h1>
      </div>
      <div>
        <AddNoteBox />
      </div>
    </div>
  );
};
//how can we pass data form child components to parent components in react
//what are callback functions in react
//how to use local storage in react
