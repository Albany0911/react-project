import React, { useEffect, useState } from 'react'
import { productDetail }  from '../../helpers/productDetails'

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    console.log(product);
    

    useEffect(() => {
        const dataProduct = async () => {
            const data = await productDetail(); // Cambia 1 por el ID del producto que quieras
            setProduct(data);
        }
        
        dataProduct();
    }, []);

  return (
    <div>
      product details
    </div>
  )
}

export default ProductDetail;
