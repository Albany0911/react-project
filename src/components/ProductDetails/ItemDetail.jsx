import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  return (
    <div className='p-6 flex flex-col shadow-md rounded-xl bg-white container'>
      <div className='product-detail'>
        <h1 className='text-xl font-bold capitalize'>{product.name}</h1>
        <img src={product.imgOfficial} alt={product.name} className='w-32 h-32 mx-auto' />
        <p><span className='text-sm'><b>HP:</b> {product.hp}</span></p>
        <p><span className='text-sm'><b>Attack:</b> {product.attack}</span></p>
        <p><span className='text-sm'><b>Defense:</b> {product.defense}</span></p>
        <p><span className='text-sm'><b>Type:</b>{product.type}</span></p>
        <Link id='btn-buy' className='items-center cursor-pointer' 
                to={`/product/${product.id}`}>
                    Pedir Ahora 
              <i className="bi bi-credit-card text-xl ml-2"></i>
        </Link>
      </div>
    </div>
  )
}

export default ItemDetail