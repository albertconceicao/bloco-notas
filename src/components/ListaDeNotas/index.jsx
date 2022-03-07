import React from "react";
import { CardNota } from "../CardNota/index";
import "./styles.css";

export const ListaDeNotas = (props) =>{
  
    return (
        <ul className="lista-notas">
            {props.notas.map((nota, index) => {
                return (
                  <li className="lista-notas_item" key={index}>
                    <CardNota 
                    indice={index}
                    apagarNota={props.apagarNota}
                    titulo={nota.titulo} texto={nota.texto}
                    categoria={nota.categoria}
                    />
                  </li>
                );
            })}
          
        </ul>
  
    )
}