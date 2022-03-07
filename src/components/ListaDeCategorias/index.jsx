import './styles.css'

export const ListaDeCategorias = (props) => {
    const handleEventInput = (event) => {
        let valorCategoria = event.target.value;
        return event.code === 'Enter'? props.criarCategoria(valorCategoria) : event.code;
    };
    
    return (
        <section className="lista-categoria">
            <ul className="lista-categorias_lista">
                {props.categorias.map((categoria, index)=> {
                    return  <li key={index}className="lista-categorias_item">{categoria}</li>;
                })}
                
            </ul>
            <input className='lista-categorias_input' type="text" placeholder='Adicionar ategoria' onKeyUp={handleEventInput}/>
        </section>
    );
}