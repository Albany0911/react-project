import LineItem from "./LineItem"


const ProductListItem = ( {pokemons} ) => {
  return (
    <div>
      <div className='sm:grid-cols-2 md:grid-cols-4 p-20 grid gap-4'>
        {pokemons.map((pokemon)=>( <LineItem pokemon={pokemon} key={pokemon.id}/>))}   
      </div>
    </div>
  )
}

export default ProductListItem
