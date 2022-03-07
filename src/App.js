import React, {useState} from 'react';
import { FormularioCadastro } from './components/FormularioCadastro/index';
import { ListaDeNotas } from './components/ListaDeNotas/index';
import { ListaDeCategorias } from './components/ListaDeCategorias';
import './assets/styles/reset.css';
import './assets/styles/global.css';

//react - lib;
//React - Ecossistema.


export  function App() {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const criarNota = (titulo, texto, categoria) => {
    const novaNota = {
      titulo,
      texto, 
      categoria
    };
    setNotas([...notas, novaNota]);
  }
  const apagarNota = (index) => {
    let arrayNotas = [...notas];
    arrayNotas.splice(index,1);
    setNotas(arrayNotas);
  }
  const criarCategoria = (nomeCategoria) => {
    setCategorias([...categorias, nomeCategoria]);
  };
  return (
      <section className='conteudo'>
        <FormularioCadastro 
        criarNota={criarNota}
        categorias={[...categorias]} />
        <main className='conteudo-principal'>
          <ListaDeCategorias criarCategoria={criarCategoria} categorias={categorias}/>
          <ListaDeNotas 
          notas={notas}
          apagarNota={apagarNota}
          />

        </main>
      </section>    
  );
}

