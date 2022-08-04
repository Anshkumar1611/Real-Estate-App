import React from "react";
import Filter from "./components/Layouts/Hero/Filter";
import Footer from "./components/Layouts/Footer/Footer";
import Navbar from "./components/Layouts/Header/Navbar";
import Results from "./components/Layouts/Hero/Results";
import Search from "./components/Layouts/Hero/Search";
 
function App() {

  return (<>
    <Navbar />
    <div className='bg-base-200'>
      <div className='mx-20 py-5'>
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
