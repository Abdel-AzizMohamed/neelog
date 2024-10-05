function TableHeader() {
  return (
    <thead>
      <tr>
        <th>
          <input type="checkbox" name="select-all" value="0" id="select-all" />
        </th>
        <th>name</th>
        <th>index</th>
        <th>creation date</th>
        <th>modification date</th>
        <th>category</th>
        <th>tutorial</th>
        <th>section</th>
        <th>children</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
