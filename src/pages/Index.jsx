import { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "사과", price: 2000, image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBhcHBsZXxlbnwwfHx8fDE3MTI2MTkxMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "바나나", price: 3000, image: "https://images.unsplash.com/photo-1668762924684-a9753a0a887c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBidW5jaHxlbnwwfHx8fDE3MTI2MTkxMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "오렌지", price: 2500, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmFuZ2VzfGVufDB8fHx8MTcxMjYxOTEzMXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "수박", price: 15000, image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRlcm1lbG9ufGVufDB8fHx8MTcxMjYxOTEzMnww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "장바구니에 추가되었습니다",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const placeOrder = () => {
    setCart([]);
    toast({
      title: "주문이 완료되었습니다",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Flex align="center" mb={8}>
        <Heading as="h1" size="xl">
          과일 쇼핑몰
        </Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" aria-label="장바구니" />
        <Badge ml={2} colorScheme="green">
          {cart.length}
        </Badge>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={2}>{product.price}원</Text>
            <Button colorScheme="blue" size="sm" onClick={() => addToCart(product)}>
              장바구니 담기
            </Button>
          </Box>
        ))}
      </Grid>

      {cart.length > 0 && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            장바구니
          </Heading>
          {cart.map((item, index) => (
            <Text key={index}>
              {item.name} - {item.price}원
            </Text>
          ))}
          <Button colorScheme="green" size="lg" mt={4} onClick={placeOrder}>
            주문하기
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Index;
