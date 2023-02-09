import React, { useEffect, useState } from "react";
import Row from "./Row";
import TableHeading from "./tableHeading";

function List({ employees, handleEdit, handleDelete }) {
  let state = employees[0];
  state = Object.keys(state);

  // shorting will not work because than the Pagination stop workig

  const [sortData, setSortData] = useState(employees);
  const [ifSort, setIfSort] = useState(false);
  const handleShort = (data) => {
    if (typeof data === "number") {
      let list;
      if (!ifSort) {
        list = [...employees].sort((a, b) => a[data] - b[data]);
        setIfSort(!ifSort);
      } else {
        list = [...employees].sort((a, b) => b[data] - a[data]);
        setIfSort(!ifSort);
      }
      setSortData(list);
    } else {
      let list = [...employees].sort((a, b) => (a[data] > b[data] ? 1 : -1));
      setSortData(list);
    }
  };
  useEffect(() => {
    console.log(sortData);
  }, [sortData]);
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            {state.map((data) => (
              <TableHeading data={data} handleShort={handleShort} key={data} />
            ))}
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <Row
                key={Object.values(employee)[0]}
                employee={employee}
                handleEdit={handleEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
