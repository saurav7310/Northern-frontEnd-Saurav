import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  let keys = Object.keys(selectedEmployee);
  console.log(selectedEmployee);
  //   console.log(keys);
  // const id = selectedEmployee.id;

  const [data, setData] = useState({ ...selectedEmployee });

  const handleOnchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    for (let i = 0; i < employees.length; i++) {
      if (Object.values(employees[i])[0] === Object.values(data)[0]) {
        employees.splice(i, 1, data);
        break;
      }
    }
    setEmployees(employees);
    setIsEditing(false);
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        {keys.map((field) => (
          <Fragment key={field}>
            <label htmlFor={field}>{field}</label>
            <input
              id={field}
              type="text"
              name={field}
              value={data[field]}
              readOnly={Object.keys(data)[0] === field ? true : false}
              onChange={handleOnchange}
            />
          </Fragment>
        ))}

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
