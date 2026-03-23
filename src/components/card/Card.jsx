import styles from "./Card.module.css";
import CustomLink from "../CustomLink";

export default function Card({ title, desc, buttonLabel, url }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className="body-secondary">{desc}</p>
      <CustomLink href={url} className="button outline small hover-accent">
        {buttonLabel}
      </CustomLink>
    </div>
  );
}
