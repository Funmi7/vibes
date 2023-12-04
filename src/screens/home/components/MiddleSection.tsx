import { Box, Flex, Heading } from "@chakra-ui/react";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

import SongCard from "../atoms/SongCard";
import { db } from "../../../firebaseConfig";
import { AlbumType } from "common/types";
import MiddleSectionSkeleton from "./MiddleSectionSkeleton";

const MiddleSection = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const albumsCollectionRef = useMemo(() => collection(db, "albums"), []);

  useEffect(() => {
    const getAlbums = async () => {
      setIsLoading(true);
      try {
        const data = await getDocs(albumsCollectionRef);
        setAlbums(
          data.docs.map((doc) => ({
            artiste: doc.data().artiste,
            image: doc.data().image,
            name: doc.data().name,
            id: doc.id,
          }))
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getAlbums();
  }, [albumsCollectionRef]);

  return (
    <MiddleSectionSkeleton isLoaded={!isLoading}>
      <Box mt="43px" w="full">
        <Heading textStyle="h2">Selected Albums.</Heading>
        <Flex mt="13px" w="full" flexWrap="wrap">
          {albums.map(({ artiste, image, name, id }) => (
            <SongCard image={image} title={name} id={id} key={id} />
          ))}
        </Flex>
      </Box>
    </MiddleSectionSkeleton>
  );
};

export default MiddleSection;
