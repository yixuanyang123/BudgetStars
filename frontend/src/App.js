import logo from './logo.svg';
import './App.css';
import Demo from './Demo/Demo.js';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Demo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
