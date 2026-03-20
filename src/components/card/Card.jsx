import styles from "./Card.module.css";

export default function Card({ title, desc, buttonLabel, onButtonClick }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className="body-secondary">{desc}</p>
      <button
        onClick={onButtonClick}
        className="button small outline hover-accent"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
