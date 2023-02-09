import React from "react";
import { useState } from "react";

const Row = ({ employee, handleEdit }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <tr onClick={() => setCollapse(!collapse)}>
        {Object.values(employee).map((data) => (
          <td key={data}>{data}</td>
        ))}

        <td className="text-right">
          <button
            onClick={() => handleEdit(Object.values(employee)[0])}
            className="button muted-button"
          >
            Edit
          </button>
        </td>
      </tr>
      {collapse && (
        <div>
          {Object.values(employee).map((data) => (
            <p key={data}>{data}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Row;
