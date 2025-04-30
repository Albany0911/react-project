import React, { useEffect, useState } from 'react'
import { productDetail }  from '../../helpers/productDetails'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams(); // Obtiene el ID del producto de la URL 

    useEffect(() => {
        const dataProduct = async () => {
            const data = await productDetail(Number(id)); // Cambia 1 por el ID del producto que quieras
            setProduct(data);
            // console.log(data);  
        }
        
        dataProduct();
    }, []);

  return (

    <div className='mt-36 sm:grid-cols-2 md:grid-cols-4 p-10 grid gap-4'>
      {product && <ItemDetail product={product} />}
    </div>
    
  )
}

export default ProductDetail;
