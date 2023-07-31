import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
//import Tours from './Components/Tours/Tours';
import Main from './Components/Main/Main';
import {Data, Tours} from './Components/Tours/Tours';
import Footer from './Components/Footer/Footer';
import Loge from './Components/Login/Loge';
import Signe from './Components/Signup/Signe';
import ScrollToTop from "./ScrollToTop";
import Account from "./Components/Account/Account";
import Book1 from './Components/Book/Book1';
import Book2 from './Components/Book/Book2';
import Book3 from './Components/Book/Book3'
import Book4 from './Components/Book/Book4'
import TourDetails from './Components/Tours/TourDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Navbar authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<HomeWithMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route exact path="/TourDetails/:id" element={<TourDetails  />} />

        <Route path="/loge" element={<Loge setAuthenticated={setAuthenticated} />} />
        <Route path="/signe" element={<Signe />} />
        <Route
          path="/account"
          element={<Account authenticated={authenticated} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/book1" element={<Book1 />} />
        <Route path="/book2" element={<Book2 />} />
        <Route path="/book3" element={<Book3 authenticated={authenticated}/>} />
        <Route path="/book4" element={<Book4 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const HomeWithMain = () => {
  return (
    <>
      <Home />
      <Main />
    </>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default App;
