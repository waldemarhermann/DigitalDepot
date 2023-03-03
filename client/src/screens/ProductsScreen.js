import { Center, center, Wrap, WrapItem } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { products } from '../products';

const ProductsScreen = () => {
  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w='250px' h='550px'>
            <ProductCard product={product}/> {/* {product} = jedes einzelne Produkt, das aus der map-Schleife herausgenommen wird, das andere product ist ein props, dass später bei ProductCard verwendet wird */}
          </Center>
        </WrapItem>
      ))}
    </Wrap> //Wrap sortiert hier automatisch die ProductCards, wenn der Bildschirm verkleinert oder vergrößert wird
  );
};

export default ProductsScreen;
