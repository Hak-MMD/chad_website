import "./toast.css";

const TYPE_CONFIG = {
  error:   { icon: "✕" },
  success: { icon: "✓" },
  info:    { icon: "i" },
  warning: { icon: "!" },
};

function Toast({ toast, onDismiss }) {
  const { icon } = TYPE_CONFIG[toast.type] || TYPE_CONFIG.info;
  return (
    <div className={`toast toast-${toast.type}${toast.exiting ? " toast-exit" : ""}`}>
      <span className="toast-icon">{icon}</span>
      <span className="toast-message">{toast.message}</span>
      <button className="toast-close" onClick={() => onDismiss(toast.id)} aria-label="Dismiss">
        ×
      </button>
    </div>
  );
}

export function ToastContainer({ toasts, onDismiss }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
