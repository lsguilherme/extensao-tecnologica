import React from 'react';
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return(
        <Router>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/home' element={<Home />}/>
                
            </Routes>
        </Router>
    )
}

export default App;