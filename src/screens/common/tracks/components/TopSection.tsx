import {
  HStack,
  Text,
  VStack,
  Box,
  Img,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { AddCollectionIcon } from "design/icons/AddCollectionIcon";
import { HeartIcon } from "design/icons/HeartIcon";
import { PlayAllIcon } from "design/icons/playAllIcon";

const TopSection = () => {
  return (
    <HStack justifyContent="flex-start" w="full">
      <Box width="284px" height="288.97px">
        <Img
          src={"img/lead-image.png"}
          borderRadius="35.1703px"
          maxW="100%"
          maxH="100%"
        />
      </Box>
      <VStack pl="27px" alignItems={"flex-start"}>
        <Heading textStyle="h1" color="cyanBlue" textAlign="start">
          Tomorrow’s tunes
        </Heading>
        <Text textStyle={"small"} color="gray.700" pt="9px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Text>
        <Text textStyle={"small"} color="gray.700" pt="10px">
          64 songs ~ 16 hrs+
        </Text>
        <HStack pt="40px" spacing={"9px"}>
          <HStack
            w="87px"
            h="36px"
            bg="rgba(255, 255, 255, 0.07)"
            backdropFilter="blur(5px)"
            borderRadius="32px"
            pl="11.33px"
          >
            <PlayAllIcon w="13x" h="13px" />
            <Text textStyle={"smaller"} color="white">
              Play all
            </Text>
          </HStack>
          <HStack
            w="151px"
            h="36px"
            bg="rgba(255, 255, 255, 0.07)"
            backdropFilter="blur(5px)"
            borderRadius="32px"
            pl="17.33px"
          >
            <AddCollectionIcon w="13.33px" h="13.33px" />
            <Text textStyle={"smaller"} color="white">
              Add to collection
            </Text>
          </HStack>
          <Flex
            w="36px"
            h="36px"
            bg="rgba(255, 255, 255, 0.07)"
            borderRadius="50%"
            justifyContent={"center"}
            alignItems="center"
          >
            <HeartIcon fill="red" w="13.33px" h="13.33px" />
          </Flex>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default TopSection;
