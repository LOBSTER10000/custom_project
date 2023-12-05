import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Template from './static/Template';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Template/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
