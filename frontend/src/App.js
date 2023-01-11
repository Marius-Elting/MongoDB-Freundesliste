import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import { dataBaseData } from './context/context';
import { useState, useEffect } from 'react';
import { getFetch } from './fetches';
import Details from './components/details/Details';

function App() {
  const [fetchedData, setfetchedData] = useState([])
  useEffect(() => {
    getFetch()
      .then(data => setfetchedData(data))
  }, [])


  return (
    <div className="App">
      <dataBaseData.Provider value={{ fetchedData, setfetchedData }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details" element={<Details />}></Route>
          </Routes>
        </Router>
      </dataBaseData.Provider>
    </div>
  );
}

export default App;
