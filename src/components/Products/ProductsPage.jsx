import React, {useState, useEffect, use} from 'react'
import { fetchPokemon } from '../../helpers/loadData'
import ProductListItem from './ProductListItem';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const ProductsPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const categoryType = useParams().name;  
  const [filterSelected, setFilterSelected] = useState([]);

  const handleFilterChange = (filter) => {
    setFilterSelected((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((item) => item !== filter); // si ya estaba seleccionado, lo quitamos
      } else {
        return [...prev, filter];  // si no estaba, lo agregamos
      }
    });
  }

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemon(50);// Obtiene todos los pokemones (limitados a 50)
      
      if (categoryType) { // Filtrar los pokemones por la categoría seleccionada
          const filteredPokemons = data.filter((pokemons) => {
            const types = pokemons.type.split("/").map(type => type.trim().toLowerCase());            
            return types.includes(categoryType.toLowerCase());
          });
          
          setPokemons(filteredPokemons);

      } else if(filterSelected.length > 0) { // Filtrar los pokemones por la categoría seleccionada por checkbox
        const filteredPokemons = data.filter((pokemons) => {
          const types = pokemons.type.split("/").map(type => type.trim().toLowerCase());            
          return filterSelected.some((selected) => types.includes(selected.toLowerCase())
        );
        });
        setPokemons(filteredPokemons);
      }else {
        setPokemons(data); // si no hay filtros, mostramos todos
      }


      
    };
    
    loadData();
  }, [categoryType, filterSelected]); // se vuelve a ejecutar cada vez que cambia el filtro o la categoría seleccionada
  
  return (   
    <section className='products-page'>
      <div className='products-page-content'>
        <Sidebar 
        onFilterChange={handleFilterChange} //la función para manejar cambios en los checkboxes.
        filterSelected={filterSelected} //los filtros activos (para marcar correctamente los checkboxes).
        pokemons={pokemons} //los pokemones filtrados (para mostrar solo los que cumplen con los filtros).
        />
        <ProductListItem pokemons={pokemons} />
      </div>
      
    </section>
  )
}

export default ProductsPage
