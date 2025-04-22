import React, {useState, useEffect} from 'react'
import { fetchPokemon } from '../../helpers/loadData'
import ProductListItem from './ProductListItem';

const ProductsPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemon(50); // puedes cambiar 10 por el número que quieras
      setPokemons(data);
    };
    
    loadData();
  }, []);
  
  return (   
    <section className='mt-36'>
      <ProductListItem pokemons={pokemons} />
    </section>
  )
}

export default ProductsPage
