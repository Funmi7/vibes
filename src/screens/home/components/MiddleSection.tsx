import { Box, Flex, Heading } from "@chakra-ui/react";
import SongCard from "../atoms/SongCard";

const newReleasesData = [
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
  { image: "/img/chartImages/new-release.svg", title: "Life in a bubble" },
];

const MiddleSection = () => {
  return (
    <Box mt="43px" w="full">
      <Heading textStyle="h2">New releases.</Heading>
      <Flex mt="13px" w="full" flexWrap="wrap">
        {newReleasesData.map(({ image, title }) => (
          <SongCard image={image} title={title} />
        ))}
      </Flex>
    </Box>
  );
};

export default MiddleSection;
