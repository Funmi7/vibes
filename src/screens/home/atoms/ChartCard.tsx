import { HStack, Img, Box, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { PlaylistType } from "common/types";
import { HeartIcon } from "design/icons/HeartIcon";

type ChartCardProps = {
  chart: PlaylistType;
};

const ChartCard: FC<ChartCardProps> = ({ chart }) => {
  const navigate = useNavigate();
  return (
    <HStack
      bg="menuBg"
      py="17px"
      pl="17px"
      pr="21px"
      w="100%"
      justifyContent="space-between"
      onClick={() =>
        navigate(`/${chart.id}`, {
          state: { isAlbum: false, image: chart.image },
        })
      }
      cursor="pointer"
    >
      <HStack>
        <Box w="63px" h="63px">
          <Img src={chart.image} maxW="100%" maxH="100%" borderRadius="10px" />
        </Box>
        <Box pl={3.5}>
          <Text textStyle="bigText" color="white">
            {chart.name}
          </Text>
          <Text textStyle="smaller" color="gray.300">
            {chart.author}
          </Text>
        </Box>
      </HStack>
      <Flex
        width="37px"
        height="37px"
        border="1px solid"
        borderColor="gray.400"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
      >
        <HeartIcon w="18px" h="18px" fill="transparent" />
      </Flex>
    </HStack>
  );
};

export default ChartCard;
