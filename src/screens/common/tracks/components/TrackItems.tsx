import { HStack, Box, Img, Text, VStack } from "@chakra-ui/react";

import { WhiteHeartIcon } from "design/icons/WhiteHeartIcon";

const TrackItems = () => {
  return (
    <VStack w="full" pt="49.03px">
      <HStack
        justifyContent={"space-between"}
        w="100%"
        bg="rgba(51, 55, 59, 0.37)"
        backdropFilter={"blur(5px)"}
        minH="56px"
        borderRadius={"15px"}
        p="8px 32px 9px 10px"
      >
        <HStack>
          <Box
            w="39px"
            h="39px"
            borderRadius="8.53125px"
            mr="20.13px"
            border="1px solid black"
          >
            <Img />
          </Box>
          <WhiteHeartIcon w="18px" h="16px" fill="transparent" />
        </HStack>

        <Text textStyle="smaller" color="white">
          Let me love you ~ Krisx
        </Text>
        <Text textStyle="smaller" color="white">
          Single
        </Text>
        <Text textStyle="smaller" color="white">
          4:17
        </Text>
      </HStack>
    </VStack>
  );
};

export default TrackItems;
