import { FC } from "react";
import { Img, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { url } from "inspector";

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
      <Box
        w="153px"
        h="153px"
        bgImage={`url(${image})`}
        borderRadius="25px"
        bgPos="top"
        bgSize="cover"
      />

      <Text textStyle="smaller" color="white" mt="5px">
        {title}
      </Text>
    </Box>
  );
};

export default SongCard;
