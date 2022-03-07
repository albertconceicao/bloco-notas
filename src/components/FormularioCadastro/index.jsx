import React from "react";
import "./styles.css";

export const FormularioCadastro = (props) => {

  let titulo = "";
  let nota = "";
  let categoria = "Sem categoria";
  const handleMudancaTitulo = (event) => {
    event.stopPropagation();
    titulo = event.target.value;
  }
  
  const handleMudancaTexto = (event) => {
    event.stopPropagation();
    nota = event.target.value;
  }
  const handleMudancaCategoria = (event) => {
    event.stopPropagation();
    categoria = event.target.value;
    console.log(`A categoria selecionada é a ${categoria}`);
  };
  const criarNota = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.criarNota(titulo,nota,categoria);
  }
  
    return (
        <form className="form-cadastro"
          onSubmit={criarNota}
        >
          <select 
          onChange={handleMudancaCategoria}
          className="form-cadastro_input">
            <option value="">Sem categoria</option>
            {props.categorias.map((categoria, index) => {
              return (
                <option key={index} value="">{categoria}</option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="Título"
            className="form-cadastro_input"
            onChange={handleMudancaTitulo}
          />
          <textarea
            rows={15}
            placeholder="Escreva sua nota..."
            className="form-cadastro_input"
            onChange={handleMudancaTexto}
          />
          <button className="form-cadastro_input form-cadastro_submit">
            Criar Nota
          </button>
       </form>
    );
}