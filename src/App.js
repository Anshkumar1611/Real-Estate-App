import React from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Search from "./components/Search";
function App() {
  return (<>
    <Navbar />
    <div class='bg-base-200'>
      <div class='mx-20 py-5'>
        <Search />
        <Filter />
        <Results />
        <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
