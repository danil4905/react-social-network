import React from "react";
import classes from "../FormControls/Form.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  let hasError = meta.error && meta.touched;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <textarea className={classes.formControl} {...input} {...props} /> <br />
      {hasError && <span className={classes}>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  let hasError = meta.error && meta.touched;
  return (
    <div className={classes.formControl}>
      <input
        className={classes.login_input + " " + (hasError ? classes.error : "")}
        {...input}
        {...props}
      />{" "}
      <br />
      {hasError && <span className={classes}>{meta.error}</span>}
    </div>
  );
};
