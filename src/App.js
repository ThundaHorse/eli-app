import React from "react";
import { PageHeader } from "./components/header/index";
import { PageFooter } from './components/footer/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, BookNow, Home, PlansAndPricing, Program } from "./pages/index";

function App() {
  return (
    <div className='App'>
      <PageHeader />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-now' element={<BookNow />} />
          <Route path='/plans-pricing' element={<PlansAndPricing />} />
          <Route path=':title' element={<Program />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <PageFooter />
    </div>
  );
}

export default App;
