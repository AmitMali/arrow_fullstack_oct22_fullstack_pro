import Home from "./pages/Home";

function App() {
  return (
    <>
      {/*<!-- Component: One column even layout --> */}
      <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <Home />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End One column even layout --> */}
    </>
  );
}

export default App;
