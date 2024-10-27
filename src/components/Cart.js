import React, {useState} from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Flex, Text, Button, Box, Card, Avatar, Grid, Heading, Link } from "@radix-ui/themes";


export default function Cart({onHandelClick}) {
    const [addToCart, setAddToCart] = useState(false)

    // let i;
    // const handleEvent = (e) => {
    //     for (let i=0; i<products.length; i++) {
    //         for(let j=0; j<products[i].variety.length; j++) {
    //             if(products[i].id === id && products[i].variety[j].inCart === true) {
    //                 i = products[i].variety.findIndex(item => item.inCart === true)
    //             }
    //         }
    //     }
    // }

    // const handleCart = () => {
    //     setAddToCart(!addToCart)
    // }

    return (
        <div>
            <h1>My Carts</h1>
        </div>
    )
}