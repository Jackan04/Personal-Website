import XMarkIcon from "../../assets/icons/xmark.svg?react";
import styles from "./Dialog.module.css";

export default function Dialog({ title, isOpen, onClose, children }) {
    return (
        <dialog open={isOpen} className={styles.dialog}>
            <header className={styles.header}>
                <h2>{title}</h2>
                <button
                    aria-label={`Close ${title} details`}
                    className="transparent hover-background closeDialogButton"
                    onClick={onClose}
                >
                    <XMarkIcon className="icon" />
                </button>
            </header>
            <div className={styles.content}>{children}</div>
        </dialog>
    );
}
