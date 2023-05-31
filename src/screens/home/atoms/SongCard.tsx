import { FC } from "react";
import { Img, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type SongCardProps = {
  image: string;
  title: string;
  id: string;
};

const SongCard: FC<SongCardProps> = ({ image, title, id }) => {
  const navigate = useNavigate();

  return (
    <Box
      mr="30px"
      mb="20px"
      cursor={"pointer"}
      onClick={() => navigate(`${id}`, { state: { isAlbum: true } })}
    >
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
