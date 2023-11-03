import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import TextArea from "./TextArea";
import RadioButtons from "./RadioButtons";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const textAreaRef = React.useRef();
  const { addToast } = React.useContext(ToastContext);

  function handlePopToast(event) {
    event.preventDefault();
    addToast({ variant, message });
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
    textAreaRef.current?.focus();
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <TextArea
            ref={textAreaRef}
            value={message}
            handleValueChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <RadioButtons
            name="variant"
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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
