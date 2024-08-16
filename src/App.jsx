import React, { useState } from 'react';
import Card from './components/Card'; 
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (nombre.length < 3 || nombre.trim() === '') {
      setError(true);
      return;
    }

   
    if (descripcion.length < 6) {
      setError(true);
      return;
    }

   
    setError(false);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Datos del Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción del curso:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p className="error-message">Por favor chequea que la información sea correcta</p>}
      {submitted && !error && nombre && descripcion && (
        <Card nombre={nombre} descripcion={descripcion} />
      )}
    </div>
  );
}

export default App;