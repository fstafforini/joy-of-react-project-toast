import React from "react";

export const ToastContext = React.createContext({
  toasts: [],
  setToasts: () => undefined,
});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

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

  const dismissAllToasts = React.useCallback((event) => {
    if (event.code === "Escape") {
      setToasts([]);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("keydown", dismissAllToasts);
    return () => {
      window.removeEventListener("keydown", dismissAllToasts);
    };
  }, [dismissAllToasts]);

  const toastsContext = React.useMemo(() => {
    return { toasts, addToast, dismissToast, dismissAllToasts };
  }, [toasts, addToast, dismissToast, dismissAllToasts]);

  return (
    <ToastContext.Provider value={toastsContext}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
