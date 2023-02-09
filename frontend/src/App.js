import "react-pagination-bar/dist/index.css";
import Dashboard from "./components";
import { useExcelContext } from "./components/context/ExcelContext";
import ParseExcel from "./components/ParsWork";

function App() {
  let { excelFile } = useExcelContext();

  return (
    <>
      <ParseExcel />

      {excelFile && excelFile.length >= 1 && (
        <Dashboard excelData={excelFile} />
      )}
    </>
  );
}

export default App;
