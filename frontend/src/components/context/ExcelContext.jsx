import React, { createContext, useContext, useState } from "react";

let Context = createContext(null);

const ExcelContext = ({ children }) => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  return (
    <Context.Provider
      value={{ excelFile, setExcelFile, excelFileError, setExcelFileError }}
    >
      {children}
    </Context.Provider>
  );
};

export default ExcelContext;

export const useExcelContext = () => {
  return useContext(Context);
};
