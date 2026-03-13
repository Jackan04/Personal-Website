import styles from "./ExperienceCards.module.css";
import experiences from "../../data/experiences.js";
import { useState } from "react";
import Dialog from "../dialog/Dialog.jsx";

export default function ExperienceCards() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            {experiences.map((item) => (
                <div key={item.category} className={styles.card}>
                    <h3 className={styles.title}>{item.category}</h3>
                    <p className="body-secondary">{item.description}</p>
                    <button
                        onClick={() => setIsOpen(item.category)}
                        className={`small outline hover-accent ${styles.openDialogButton}`}
                    >
                        Read More
                    </button>
                    <Dialog
                        title={item.category}
                        isOpen={isOpen === item.category}
                        onClose={() => setIsOpen(false)}
                    >
                        <div>
                            <p>{item.details}</p>
                        </div>
                        <div>
                            <h3>Toolset</h3>
                            <div className={styles.toolList}>
                                {item.toolset.map((tool) => (
                                    <div key={tool} className={styles.label}>
                                        <p>{tool}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Dialog>
                </div>
            ))}
        </div>
    );
}
