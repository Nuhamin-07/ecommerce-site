import React from 'react'
import { products } from '../data'
import SingleProduct from './SingleProduct'
import { Grid} from "@radix-ui/themes";
// import { IoCartOutline } from "react-icons/io5";

export default function AllProduct() {

     return (
        <>
        <h1 className="productsHeader">Products</h1>
        {/* <Link href="/cart">
            <IoCartOutline />
        </Link> */}
        <Grid gap="3" columns={{ initial: "1", md: "3", xs:"1", l: "3" }} width="auto" justify="center">
            {products.map(product => {
                return(
                    <SingleProduct 
                        key={product.id}
                        productId={product.id}
                        image={product.variety[0].image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        variety={product.variety}
                        size={product.size}/>
                )
            })}
            </Grid>
            </>
     )
     
}