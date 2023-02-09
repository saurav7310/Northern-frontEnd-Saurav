import React, { useState } from "react";

const TableHeading = ({ data, handleShort }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    handleShort(data);
  };
  return (
    <th key={data} onClick={handleClick}>
      {data}
      <i className={`fa-solid ${toggle ? "fa-arrow-up" : "fa-arrow-down"}`}></i>
    </th>
  );
};

export default TableHeading;
