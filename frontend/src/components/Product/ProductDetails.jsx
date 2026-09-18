import { useEffect, useState } from "react";
import ProductDetailsUI from "./ProductDetailsDesign";
import { useParams } from "react-router-dom";
import { productsById } from "../../api/ProuductApi";


const ProductDetails = () => {

    const {id} = useParams();

    const [product,setProduct] = useState(null);


    useEffect(()=>{

        const fetchProduct = async()=>{

            const data = await productsById(id);

            setProduct(data.product);

        }

        fetchProduct();

    },[id]);



    if(!product)
        return <p>Loading...</p>



    return (
        <ProductDetailsUI product={product}/>
    )

}


export default ProductDetails;