import React from "react";
import useKey from "../../hooks/useKey";

export const ToastContext = React.createContext({
  toasts: [],
  setToasts: () => undefined,
});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const clearToasts = React.useCallback(() => setToasts([]), []);
  useKey({ keyName: "Escape", callback: clearToasts });

  const addToast = React.useCallback(
    ({ variant, message }) => {
      const id = `${variant}-${message}-${Math.random()}`;
      setToasts([...toasts, { id, message, variant }]);
    },
    [toasts]
  );

  const dismissToast = React.useCallback(
    (dismissedToastId) => {
      setToasts(toasts.filter((toast) => toast.id !== dismissedToastId));
    },
    [toasts]
  );

  const toastsContext = React.useMemo(() => {
    return { toasts, addToast, dismissToast };
  }, [toasts, addToast, dismissToast]);

  return (
    <ToastContext.Provider value={toastsContext}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
