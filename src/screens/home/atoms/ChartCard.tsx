import { HStack, Img, Box, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";

import { HeartIcon } from "design/icons/HeartIcon";

type ChartCardProps = {
  chart: SpotifyApi.PlaylistObjectSimplified;
};

const ChartCard: FC<ChartCardProps> = ({ chart }) => {
  return (
    <HStack
      bg="menuBg"
      py="17px"
      pl="17px"
      pr="21px"
      w="100%"
      justifyContent="space-between"
    >
      <HStack>
        <Box w="63px" h="63px">
          <Img
            src={chart.images[0].url}
            maxW="100%"
            maxH="100%"
            borderRadius="10px"
          />
        </Box>
        <Box pl={3.5}>
          <Text textStyle="bigText" color="white">
            {chart.name}
          </Text>
          <Text textStyle="smaller" color="gray.300">
            {chart.owner.display_name}
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
