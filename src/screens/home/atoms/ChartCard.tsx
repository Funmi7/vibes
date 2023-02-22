import { HStack, Img, Box, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";

import { HeartIcon } from "design/icons/HeartIcon";

type ChartDataType = {
  img: string;
  title: string;
  artiste: string;
  length: string;
};

type ChartCardProps = {
  chart: ChartDataType;
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
        <Img src={chart.img} />
        <Box pl={3.5}>
          <Text textStyle="bigText" color="white">
            {chart.title}
          </Text>
          <Text textStyle="smaller" color="gray.300">
            {chart.artiste}
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
