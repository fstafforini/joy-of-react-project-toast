import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import { TextArea } from "./TextArea";
import { RadioButtons } from "./RadioButtons";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleSendMessage() {
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <TextArea
            value={message}
            handleValueChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <RadioButtons
            name={variant}
            values={VARIANT_OPTIONS}
            currentValue={variant}
            handleValueChange={(event) => {
              setVariant(event.target.value);
            }}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handleSendMessage}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
