import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
// import 'react-calendar/dist/Calendar.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import Detail from './Pages/Detail';
import Listing from './Pages/Listing';
import ScrollTopBtn from './Components/ScrollTopBtn/ScrollTopBtn';

function App() {
  return (
    <ChakraProvider theme={'light'}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/details" element={<Detail />} />
          <Route exact path="/listing" element={<Listing />} />
        </Routes>
        <ScrollTopBtn />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
