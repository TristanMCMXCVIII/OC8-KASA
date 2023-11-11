import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.scss';

import Header from './components/Header'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import Error from './pages/Error';
import Footer from './components/Footer';

//import des données dans le router et le mettre en paramètre des composants <Route exact path='/' element={<Home logements={Logements}/>} />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:logementId" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>  
      <Footer />
    </Router>
    
  </React.StrictMode>
);
