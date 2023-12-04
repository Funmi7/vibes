import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const CenterLoader = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    w="full"
    h="100vh"
    bg="primaryBg"
  >
    <Spinner color="mainSecondary" size="lg" />
  </Flex>
);

export default CenterLoader;
