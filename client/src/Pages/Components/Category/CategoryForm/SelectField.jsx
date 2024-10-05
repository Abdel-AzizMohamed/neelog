import styles from "../category.module.css";

function SelectField({
  taggingName,
  tagging,
  setTagging,
  isRead,
  taggingItems,
}) {
  return (
    <div className={styles["field-group"]}>
      <label>{taggingName}</label>
      <select
        value={tagging}
        disabled={isRead}
        onChange={(e) => setTagging(e.target.value)}
      >
        {taggingItems.map((data) => {
          return <option key={data}>{data}</option>;
        })}
      </select>
      <span>The {taggingName} that will be added to.</span>
    </div>
  );
}

export default SelectField;
