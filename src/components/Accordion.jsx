import ChevronDownIcon from "../assets/icons/chevron-down.svg?react";
import styles from "./Accordion.module.css";

export default function Accordion({ summary, children }) {
  return (
    <details className={styles.accordion}>
      <summary className={styles.summary}>
        {summary}
        <ChevronDownIcon className={`icon hover-accent ${styles.icon}`} />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
