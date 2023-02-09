import React from "react";
import * as XLSX from "xlsx";
import { useExcelContext } from "./context/ExcelContext";

const ParseExcel = () => {
  let { excelFile, setExcelData, setExcelFileError, setExcelFile } =
    useExcelContext();
  let fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      }
    } else {
      setExcelFileError("Please select excel file");
      setExcelData(null);
    }
  };

  //   submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelFile(data);
    } else {
      setExcelFile(null);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Upload Excel File</label>

            <input onChange={handleFile} required type="file"></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ParseExcel;
