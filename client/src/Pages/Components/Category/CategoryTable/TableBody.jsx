import styles from "../category.module.css";

function TableBody({
  tableItems,
  selectedItems,
  setSelected,
  setCurrentLevel,
  setOperation,
}) {
  return (
    <tbody>
      {tableItems.map((data, ind) => {
        let creation_time = new Date(
            data.creation_date["$date"]
          ).toLocaleDateString(),
          modification_date = new Date(
            data.modification_date["$date"]
          ).toLocaleDateString();
        return (
          <tr
            className={styles[data.class]}
            key={ind}
            onDoubleClick={(e) => setCurrentLevel((c) => [...c, data.name])}
            onClick={(e) => {
              data.class = data.class ? "" : "active";
              if (data.class) setSelected((s) => [...s, data]);
              else {
                const filter_data = selectedItems.filter(
                  (ele) => ele.name !== data.name
                );
                setSelected(filter_data);
              }
            }}
          >
            <td>
              <input
                readOnly
                type="checkbox"
                value={ind}
                checked={data.class ? true : false}
              />
            </td>
            <td className={styles["ceil-container"]}>
              <span className={styles["tag-name"]}>{data.name}</span>
              <span
                onClick={() => setOperation("delete")}
                className={styles["tag-delete"]}
              >
                delete
              </span>
            </td>
            <td>{data.index}</td>
            <td>{creation_time}</td>
            <td>{modification_date}</td>
            <td>{data.category}</td>
            <td>{data.tutorial}</td>
            <td>{data.section}</td>
            <td>{data.children}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
