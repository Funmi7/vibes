import { Flex, Box, HStack, Img } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import SearchComponent from "./common/SearchComponent";
import LeftSideNav from "./components/LeftSideNav";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex w="100%" direction="column" bg="primaryBg" minH="100vh" pr="59px">
      <HStack pt="23.5px" pl="28.77px">
        <Img src="/img/logo.png" w="34px" h="34px" mr="36.77px" />
        <Box pl="29px" mt="15px">
          <SearchComponent />
        </Box>
      </HStack>
      <Flex pl="5">
        <Box>
          <LeftSideNav />
        </Box>
        <Box mt="23px" ml="24px" w="full">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
