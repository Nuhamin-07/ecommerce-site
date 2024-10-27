import React, {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CaretLeftIcon, CaretRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Flex, Text, Button, Box, Card, Avatar, Grid, Heading } from "@radix-ui/themes";
import {products} from '../data'
// import Product from "./Product";
// import { IoCartOutline } from "react-icons/io5";


//import "./styles.css";

export default function SingleProduct ({productId, image, name, description, price, variety, size}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [id, setId] = useState(0)
    const [index, setIndex] = useState(0)
    const [color, setColor] = useState("")
    const [productSize, setProductSize] = useState("")
    const [addToCart, setAddToCart] = useState(false)

    const handleOpen = (image, pId) => {
        setSelectedImage(image);
        setIsOpen(true);
        setId(pId)
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedImage(null);
        setIndex(0)
    };

    const handleNextClick = () => {
        for(let i=0; i<products.length; i++) {
            if(products[i].id === id) {
                if(index < products[i].variety.length - 1) {
                    setIndex(() => index + 1)
                }
            } 
        }
    }

    const handlePreviousClick = () => {
        if(index > 0) {
            setIndex(() => index - 1)
        }
    }

    const handleImage = (e) => {
        for (let i=0; i<products.length; i++) {
            for(let j=0; j<products[i].variety.length; j++) {
                if(products[i].id === id && products[i].variety[j].color === e.target.innerText) {
                    setIndex(products[i].variety.findIndex(item => item.color === e.target.innerText))
                }
            }
        }
    }
    
    let i;
    const handleEvent = (e) => {
        for (let i=0; i<products.length; i++) {
            for(let j=0; j<products[i].variety.length; j++) {
                if(products[i].id === id && products[i].variety[j].inCart === true) {
                    i = products[i].variety.findIndex(item => item.inCart === true)
                }
            }
        }
    }

    // const handleColor = (e) => {
    //     setColor(() => e.target.innerText)
    // }

    const handleSize = (e) => {
        setProductSize(() => e.target.innerText)
    }

    const handleCart = () => {
        setAddToCart(!addToCart)
    }

    let img;
    for (let i=0; i<products.length; i++) {
        if(products[i].id === id) {
            img = products[i].variety[index].image
        }
    }
    
    return (
        <>
        <Dialog.Root>
		{/* <Grid gap="3" columns="3" width="auto" justify="center"> */}
                    <Dialog.Trigger 
                    asChild 
                    key={productId}
                    >
                    
                    <Card 
                        width="200px"
                        position="relative" 
                        box-shadow="5px 5px" 
                        onClick={() => handleOpen(image, productId)}
                    >
                        <Flex direction="column" align="center">
                        <Avatar                            
                            size="8"
                            src={image}
                        />
                            <Heading>{name}</Heading>
                        <br/>
                        <Text>{description}</Text>
                        <br/>
                        <Text><b>Price: </b>{price}</Text>
                        </Flex>
                        </Card>                       
                        </Dialog.Trigger>
             {/* </Grid>			 */}
		
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
                        <img src={img} alt={selectedImage} width="90%" height="250px"/>
                    )}
                    {/* <Text>{index}</Text>
                    <Text>{color}</Text> " "
                    <Text>{productSize}</Text> " " */}
                    <button width="70px" height="70px" onClick={handleNextClick}>
                        <b><CaretRightIcon/></b>              
                    </button>
                    <Flex direction="column">
                    <Grid columns="5" gap="3" width="auto">
                    {size.map(s => {
                        return (
                    <Button variant="soft" color="gray" key={s.index} onClick={handleSize}>{s}</Button>
                    )
                    })}
                        </Grid>
                        <Grid columns="3" gap="3" width="auto">
                        {variety.map(v => {
                        return (
                        <Button variant="solid" color="gray" key={v.id} onClick={handleImage}>{v.color}</Button>
                         )
                        })}
                        </Grid>
                        <br/>
                       {addToCart ? (
                         <Button variant="solid" color="blue" height="50px" onClick={handleCart}>
                         Remove From Cart
                            </Button>
                       ) : (
                        <Button variant="solid" color="blue" height="50px" onClick={handleCart}>
                        Add To Cart
                        {/* <IoCartOutline />                        */}
                    </Button>
                       )}
                    </Flex>
				<Dialog.Close asChild>
					<button className="IconButton" aria-label="Close" onClick={handleClose}>
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
        </>    
    )
	};
