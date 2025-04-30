import React, {useState, useEffect} from 'react'
import { fetchPokemon } from '../../helpers/loadData'
import ProductListItem from './ProductListItem';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const categoryType = useParams().name;  

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemon(50);
      // Filtrar los pokemones por la categoría seleccionada
      if (categoryType) {

          const filteredPokemons = data.filter((pokemons) => {
            const types = pokemons.type.split("/").map(type => type.trim().toLowerCase());            
            return types.includes(categoryType.toLowerCase());
          });
          
          setPokemons(filteredPokemons);

      } else {
        setPokemons(data);
      }
    };
    
    loadData();
  }, [categoryType]);
  
  return (   
    <section className='mt-36'>
      <ProductListItem pokemons={pokemons} />
    </section>
  )
}

export default ProductsPage
