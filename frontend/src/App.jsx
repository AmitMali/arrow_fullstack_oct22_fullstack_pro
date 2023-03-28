import MainLayoute from "./Layoutes/MainLayoute";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateStudent2 from "./pages/students/CreateStudent2";
import AllStudents from "./pages/students/AllStudents";
import SingleStudent from "./pages/students/SingleStudent";
import Profile from "./pages/students/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/students/new" element={<CreateStudent2 />} />
          <Route path="/students/:id" element={<SingleStudent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
