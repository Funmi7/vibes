import { Flex, Box, HStack, Img } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import AudioPlayer from "screens/common/audioplayer/AudioPlayer";
import SearchComponent from "./common/SearchComponent";
import LeftSideNav from "./components/LeftSideNav";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex w="100%" direction="column" bg="primaryBg" h="100vh">
      <HStack pt="23.5px" pl="28.77px">
        <Img src="/img/logo.png" w="34px" h="34px" mr="36.77px" />
        <Box pl="29px" mt="15px">
          <SearchComponent />
        </Box>
      </HStack>
      <Flex pl="5" bg="primaryBg">
        <Box>
          <LeftSideNav />
        </Box>
        <Box
          mt="23px"
          ml="24px"
          w="full"
          pr="59px"
          zIndex="0"
          overflowY={"scroll"}
          bg="primaryBg"
          h="calc(100vh - 215px)"
        >
          {children}
        </Box>
      </Flex>
      <AudioPlayer />
    </Flex>
  );
};

export default MainLayout;
