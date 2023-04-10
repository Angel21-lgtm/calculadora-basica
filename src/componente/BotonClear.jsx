import React from "react";
import "../hojas-de-estilo/BotonClear.css";

const BotonClear = (props) => (
    <button
    onClick={() => {props.manejarClick()}}
    className="boton-clear">
        {props.children}
    </button>
);

export default BotonClear;