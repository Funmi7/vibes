import {
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  VStack,
  Img,
} from "@chakra-ui/react";
import ChartCard from "../atoms/ChartCard";

const chartData = [
  {
    img: "/img/chartImages/golden.svg",
    title: "Golden age of 80s",
    artiste: "Sean swadder",
    length: "2:34:45",
  },
  {
    img: "/img/chartImages/reggae.svg",
    title: "Reggae “n” blues",
    artiste: "Dj YK mule",
    length: "2:34:45",
  },
  {
    img: "/img/chartImages/tomorrow.svg",
    title: "Tomorrow’s tunes",
    artiste: "Obi Datti",
    length: "2:01:25",
  },
];

const TopSection = () => {
  return (
    <Flex justifyContent="space-between" w={{ sm: "100%", "2xl": "100%" }}>
      <HStack
        width="686px"
        height="373px"
        backgroundColor="#609EAF"
        backgroundImage="/img/grey-bg.svg"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        borderRadius="40px"
        alignItems="flex-start"
        pl="45px"
      >
        <VStack
          justifyContent="space-between"
          alignItems="flex-start"
          h="50%"
          w="45%"
          pt="38px"
        >
          <Text textStyle="smaller" color="white">
            Currated playlist
          </Text>
          <Heading textStyle="h1">R & B Hits</Heading>
          <Text textStyle="small" color="white">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit,
            <br /> and so much more
          </Text>
        </VStack>
        <Box>
          <Img src="img/man.png" />
        </Box>
      </HStack>
      <VStack spacing={3} alignItems="flex-start" ml="22px" w="50%">
        <Heading textStyle="h2" mb="14px">
          Top charts
        </Heading>
        {chartData.map((chart) => (
          <ChartCard chart={chart} />
        ))}
      </VStack>
    </Flex>
  );
};

export default TopSection;
