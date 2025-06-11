import styles from "./button.module.css";

export function Button({ title, children, className, ...props }) {
  const combinedClassName = `${styles.buttonAdd} ${className || ""}`.trim();

  return (
    <button {...props} className={combinedClassName}>
      {title || children}
    </button>
  );
}
