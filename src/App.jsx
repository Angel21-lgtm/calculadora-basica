import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from './componente/Boton';
import Pantalla from './componente/Pantalla';
import BotonClear from './componente/BotonClear';
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = value => {
    setInput(input + value);
  }

  const borrarInput = () => {
    setInput("");
  }

  const calcularResultado = () => {
    if(input) setInput(evaluate(input));
    else setInput("");
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freeCodeCampLogo} 
          alt="Logo de freeCodeCamp" 
          className="freecodecamp-logo" />
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClick={borrarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
