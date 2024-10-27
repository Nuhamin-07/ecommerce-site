import React, {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CaretLeftIcon, CaretRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Flex, Text, Button, Box, Card, Avatar, Grid, Heading, Inset } from "@radix-ui/themes";
import {products} from '../../data'
import Product from "../Product";


import "./styles.css";

export default function Dialogue () {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [id, setId] = useState(0)
    const [index, setIndex] = useState(0)

    const handleOpen = (image, pId) => {
        setSelectedImage(image);
        setIsOpen(true);
        setId(pId)
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    const handleNextClick = () => {
        for(let i=1; i<products.length; i++) {
            if(products[i].id === id) {
                //setIndex(() => index + 1)
                // for(let j=0; j<products[i].variety.length; j++) {
                //     setIndex(index + 1)
                //     console.log(products[i].variety[j+1])
                //     //setSelectedImage(products[i].variety[index].image)
                // }
                // setVid(vid + 1)
                // for(let j=0; j<products[i].variety[j].length; i++) {
                //     setSelectedImage(products[i].variety[vid].image)
                // }
            } 
        }
        
    }

    const handlePreviousClick = () => {
        setIndex(() => index - 1)
    }

    const handleImage = (image) => {
        setSelectedImage(image)
    }
    let img;
    for (let i=0; i<products.length; i++) {
        if(products[i].id === id) {
            img = products[i].variety[index].image
        }
        
    }

    return (
        <Dialog.Root>
		<Grid gap="3" columns="3" width="auto" justify="center">
            {products.map(product => {
                return (
                    <Dialog.Trigger 
                    asChild 
                    key={product.id}
                    >
                    
                    <Card 
                        width="200px"
                        position="relative" 
                        box-shadow="5px 5px" 
                        onClick={() => handleOpen(product.variety[0].image, product.id)}
                    >
                        <Flex direction="column" align="center">
                        <Avatar                            
                            size="8"
                            src={product.variety[0].image}
                        />
                            <Heading>{product.name}</Heading>
                        <br/>
                        <Text>{product.description}</Text>
                        <br/>
                        <Text><b>Price: </b>{product.price}</Text>
                        </Flex>
                        </Card>                       
                        </Dialog.Trigger>
                )
            })}
             </Grid>			
		
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Title className="DialogTitle">Product</Dialog.Title>
				<Dialog.Description className="DialogDescription">
					Choose from a variety of products according to your interest.
				</Dialog.Description>
               <button width="70px" height="70px" onClick={handlePreviousClick}>
                   <b><CaretLeftIcon/></b>
               </button>
               {selectedImage && (
                        <img src={selectedImage} alt={selectedImage} width="400px" height="400"/>
                    )}
                    <Text>{index}</Text>
                    <button width="70px" height="70px" onClick={handleNextClick}>
                        <b><CaretRightIcon/></b>              
                    </button>
				<Dialog.Close asChild>
					<button className="IconButton" aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
    )
	};
