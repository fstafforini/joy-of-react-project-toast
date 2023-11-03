import React from "react";
import styles from "./ToastPlayground.module.css";

function TextArea({ value, handleValueChange, id, ...delegated }, ref) {
  const computedId = React.useId();
  const textAreaId = id ?? computedId;
  return (
    <>
      <label
        htmlFor={textAreaId}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          {...delegated}
          ref={ref}
          id={textAreaId}
          className={styles.messageInput}
          value={value}
          onChange={handleValueChange}
        />
      </div>
    </>
  );
}

export default React.forwardRef(TextArea);
