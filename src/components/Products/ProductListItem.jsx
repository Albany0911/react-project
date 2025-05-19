import LineItem from "./LineItem"


const ProductListItem = ( {pokemons} ) => {
  return (
    <div className="">
      <div id="product-line-item-container" className='sm:grid-cols-2 md:grid-cols-4 p-0 grid gap-4'>
        {pokemons.map((pokemon)=>( <LineItem pokemon={pokemon} key={pokemon.id}/>))}   
      </div>
    </div>
  )
}

export default ProductListItem
