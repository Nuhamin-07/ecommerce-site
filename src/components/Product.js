import React, {useState} from 'react'
import { Flex, Text, Button, Box, Card, Avatar, Grid, Heading, Link } from "@radix-ui/themes";
import {products} from '../data'
import { IoCartOutline } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
//import Dialogue from './dialogue/Dialogue'

export default function Product() {
    const [image, setImage] = useState("")

    function handleClick(e) {
        for(let i=0; i<products.length; i++) {
            if(products[i] === e.currentTarget.getAttribute('data-id')) {
                {products[i].variety.map(v => {
                    return (
                         <Grid gap="3" columns="5">
                            <div 
                                onClick={handleClick}
                                data-id={v.id}>
                                <Avatar
                                    key={v.id}
                                    size="8"
                                    src={v.image}
                                    fallback={products[i].name + " " + v.color}
                                />
                            </div>
                         </Grid>
                    )
                })}
            }
        }
        //console.log(e.currentTarget.getAttribute('data-id'))
    }
    return (
        
        <Box>
            <Grid gap="3" columns="3" width="auto" justify="center">
            {products.map(product => {
                return (
                    <Box width="200px"position="relative">
                        <Heading>{product.name}</Heading>
                        <Avatar
                            //onClick={handleClick}
                            data-id={product.id}
                            // key={v.id}
                            size="8"
                            src={product.variety[0].image}
                            //fallback={product.name + " " + v.color}
                        />
                            {product.variety.map(v => {
                                return (
                                     <Grid gap="3" columns="5">
                                        <div 
                                            onClick={handleClick}
                                            data-id={v.id}>
                                            {/* <Avatar
                                                key={v.id}
                                                size="8"
                                                src={v.image}
                                                fallback={product.name + " " + v.color}
                                            /> */}
                                        </div>
                                     </Grid>
                                )
                            })}
                        
                        <Text>{product.description}</Text>
                        <br/>
                        <Text><b>Price: </b>{product.price}</Text>
                        {/* <Button>
                        <IoCartOutline />                       
                        </Button> */}
                        </Box>
                )
            })}
            </Grid>
        </Box>
    
    )
}