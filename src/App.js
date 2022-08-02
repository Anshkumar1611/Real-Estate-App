import React, { useState } from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Search from "./components/Search";
import data from "./components/utils/Data/data"

function App() {
  const [type, setType] = useState(data)

  const filterItems = (propertyType) => {
    if (propertyType === 'All') {
      setType(data)
      return;
    }
    const newItems = data.filter((item) => item.propertyType === propertyType);
    setType(newItems);

  }


  return (<>
    <Navbar />
    <div class='bg-base-200'>
      <div class='mx-20 py-5'>
        <Search filterItems={filterItems}/>
        <Filter />
        <Results />
        <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
