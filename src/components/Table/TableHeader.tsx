const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            className="table_row_checkbox"
            id="table_header_row_checkbox"
          />
        </th>
        <th>NAME</th>
        <th>HEALTH</th>
        <th>LOCATION</th>
        <th>RECORDER</th>
        <th>TASK</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
