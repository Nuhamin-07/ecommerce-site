import logo from './logo.svg';
import './App.css';
import { Flex, Text, Button } from "@radix-ui/themes";
import Product from './components/Product'
import Dialogue from './components/dialogue/Dialogue'
import AllProduct from './components/AllProduct'

function App() {
  return (
      <Flex direction="column" gap="2">
        <AllProduct/>
			{/* <Product/> */}
		</Flex>
  );
}

export default App;
