import MainLayoute from "./Layoutes/MainLayoute";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateStudent2 from "./pages/students/CreateStudent2";
import AllStudents from "./pages/students/AllStudents";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<AllStudents />} />

          <Route path="/students/new" element={<CreateStudent2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
