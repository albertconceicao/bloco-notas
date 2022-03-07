import React from "react";
import './styles.css';
import {ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

export const CardNota = (props) => {
    const apagar = () => {
      const indice = props.indice;
      props.apagarNota(indice);
    }
    return (
          <section className="card-nota">
            <header className="card-nota_cabecalho">
              <h3 className="card-nota_titulo">{props.titulo}</h3>
              <DeleteSVG onClick={apagar}/>
              <h4>{props.categoria}</h4>
            </header>
            <p className="card-nota_texto">{props.texto}</p>
          </section>
    );
}