import React from "react";
import styles from "./AddNoteBox.module.css";
import { Button } from "../Button";

export const AddNoteBox = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
  };
  return (
    <form onSubmit={formSubmitHandler} className="form">
      <input
        type="text"
        className="textBox"
        placeholder="Enter your notes here"
      />
      <Button buttonText="save"></Button>
    </form>
  );
};
