import React, { useState } from "react";

import { Pagination } from "react-pagination-bar";

import List from "./List";

import Edit from "./Edit2";
import "react-pagination-bar/dist/index.css";

// import { employeesData } from "../data";

function Dashboard({ excelData }) {
  const [employees, setEmployees] = useState(excelData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 10;

  const handleEdit = (id) => {
    const [employee] = employees.filter(
      (employee) => Object.values(employee)[0] === id
    );

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEditing && employees && (
        <>
          {/* <Header setIsAdding={setIsAdding} /> */}

          <Pagination
            currentPage={currentPage}
            itemsPerPage={pagePostsLimit}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            totalItems={employees.length}
            pageNeighbours={2}
            customClassNames={{
              rpbItemClassName: "custom-item",
            }}
          />

          <List
            employees={employees.slice(
              (currentPage - 1) * pagePostsLimit,
              currentPage * pagePostsLimit
            )}
            handleEdit={handleEdit}
            // handleDelete={handleDelete}
          />
        </>
      )}

      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
