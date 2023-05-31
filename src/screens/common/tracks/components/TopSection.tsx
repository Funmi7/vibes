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
import { FC } from "react";

type PlaylistDescProps = {
  name?: string;
  description?: string | null;
  image?: string;
  totalTracks?: string | number;
};

const TopSection: FC<PlaylistDescProps> = ({
  name,
  description,
  image,
  totalTracks,
}) => {
  return (
    <HStack justifyContent="flex-start" w="full">
      <Box width="284px" height="288.97px">
        <Img borderRadius="35.1703px" maxW="100%" maxH="100%" src={image} />
      </Box>
      <VStack pl="27px" alignItems={"flex-start"}>
        <Heading textStyle="h1" color="cyanBlue" textAlign="start">
          {name}
        </Heading>
        <Text textStyle={"small"} color="gray.700" pt="9px">
          {description}
        </Text>
        <Text textStyle={"small"} color="gray.700" pt="10px">
          {totalTracks}{" "}
          {totalTracks && totalTracks > 1
            ? "songs"
            : totalTracks && totalTracks === 1
            ? "song"
            : ""}
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
