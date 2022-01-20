import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Blog, BookNow, PlansAndPricing } from './pages/index';
import { PageFooter } from './components/footer/index';
import { PageHeader } from './components/header/index';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <PageHeader />
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/book-now' element={<BookNow />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/plans-pricing' element={<PlansAndPricing />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    <PageFooter />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
