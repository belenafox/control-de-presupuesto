import React from 'react';
import './App.css';
import Pregunta from './components/Pregunta';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal comntenido">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
