import { FC } from "react";
import { Img, Box, Text } from "@chakra-ui/react";

type SongCardProps = {
  image: string;
  title: string;
};

const SongCard: FC<SongCardProps> = ({ image, title }) => {
  return (
    <Box mr="30px" mb="20px">
      <Box w="153px" h="153px">
        <Img
          src={image}
          alt="songs images"
          maxW={"100%"}
          maxH="100%"
          borderRadius="25px"
        />
      </Box>
      <Text textStyle="smaller" color="white" mt="5px">
        {title}
      </Text>
    </Box>
  );
};

export default SongCard;
