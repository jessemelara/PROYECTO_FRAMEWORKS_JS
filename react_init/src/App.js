import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
  var nombre = "Jesse Melara";
  var presentacion = <h2>Hola, soy {nombre}</h2>;
  
  let receta = {
    nombre: "Pizza",
    ingredientes: ["Harina", "Tomate", "Queso", "Jamon", "Pepperoni"],
    calorias: 400
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al curso de React<br/>
          {presentacion}
        </p>
        <React.Fragment>
          <h1>{'Receta: '+receta.nombre}</h1>
          <h2>{'Calorias: '+receta.calorias}</h2>
          <ol>
            {receta.ingredientes.map((ingrediente, i) => {
              return(
                <li key={i}>{ingrediente}</li>
              );
            })}
          </ol>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
