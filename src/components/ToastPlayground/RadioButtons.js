import React from "react";
import styles from "./ToastPlayground.module.css";

export function RadioButtons({
  values,
  currentValue,
  handleValueChange,
  id,
  ...delegated
}) {
  const computedId = React.useId();
  const radioId = id ?? computedId;
  return (
    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
      {values.map((value) => {
        const itemId = radioId + "-" + value;
        return (
          <label htmlFor={itemId} key={itemId}>
            <input
              {...delegated}
              id={itemId}
              type="radio"
              name={radioId}
              value={value}
              checked={value === currentValue}
              onChange={handleValueChange}
            />
            {value}
          </label>
        );
      })}
    </div>
  );
}
