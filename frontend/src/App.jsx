import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/*<!-- Component: One column even layout --> */}
      <section>
        <Navbar />
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Router>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End One column even layout --> */}
    </>
  );
}

export default App;
