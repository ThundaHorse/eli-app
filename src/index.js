import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Materialize CSS & JS
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { PageHeader } from './components/header';
import { PageFooter } from './components/footer';
import {
  About,
  BookNow,
  Home,
  PlansAndPricing,
  Program,
  SuccessStories,
} from './pages/index';
import { BookOnline } from './pages/BookOnline';

const routing = (
  <Router>
    <PageHeader />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book-now' element={<BookNow />} />
        <Route path='/plans-pricing' element={<PlansAndPricing />} />
        <Route path=':title' element={<Program />} />
        <Route path='/success-stories' element={<SuccessStories />} />
        <Route path='/about' element={<About />} />
        <Route path='/book-online' element={<BookOnline />} />
      </Routes>
    </main>
    <PageFooter />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
