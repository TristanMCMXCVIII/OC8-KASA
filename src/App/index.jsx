import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/Header'
import Home from '../pages/Home'
import FicheLogement from '../pages/FicheLogement';
import APropos from '../pages/APropos';
import Error from '../pages/Error';
import Footer from '../components/Footer';

import logementsData from '../datas/logements.json';

//import des données dans le router et le mettre en paramètre des composants <Route exact path='/' element={<Home logements={Logements}/>} />


function App() {

    const [logements, setLogements] = useState([])

    useEffect( () =>
        setLogements(logementsData), []
    )

    return (
    <Router>
        <Header />
        
        <Routes>
            <Route path="/" element={<Home logements={logements}/>} />
            <Route path="/FicheLogement/:logementId" element={<FicheLogement logements={logements}/>} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="*" element={<Error />} />
        </Routes>  

        <Footer />
    </Router>
    )
}
    
export default App;