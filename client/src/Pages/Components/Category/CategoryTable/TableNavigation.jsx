import styles from "../category.module.css";

function TableNavigation({ currentLevel, setCurrentLevel }) {
  return (
    <div className={styles["categorize-nav"]}>
      {currentLevel.map((level, index) => {
        return (
          <span
            onClick={() => setCurrentLevel((c) => c.slice(0, index + 1))}
            key={index}
            className={styles["nav-preview"]}
          >
            {level}
          </span>
        );
      })}
    </div>
  );
}

export default TableNavigation;
