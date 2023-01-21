import { VStack, Box, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

import { CollectionIcon } from "design/icons/CollectionIcon";
import { HomeIcon } from "design/icons/HomeIcon";
import { RadioIcon } from "design/icons/RadioIcon";
import { VideoIcon } from "design/icons/VideoIcon";

const LeftSideNav = () => {
  const location = useLocation();
  return (
    <VStack
      mt="39.5px"
      bg="menuBg"
      width="52px"
      height="230px"
      borderRadius="4xl"
      pt="20px"
    >
      <Box mb="20px">
        <Link as={NavLink} to="/">
          <HomeIcon
            fill={location.pathname === "/" ? "mainSecondary" : "gray.200"}
            w="22px"
            h="22px"
          />
        </Link>
      </Box>

      <Box>
        <Link as={NavLink} to="/collections">
          <CollectionIcon fill="gray.200" w="22px" h="22px" />
        </Link>
      </Box>
      <Box pt="20px">
        <RadioIcon fill="gray.200" w="22px" h="22px" />
      </Box>
      <Box pt="20px">
        <VideoIcon fill="gray.200" w="22px" h="22px" />
      </Box>
    </VStack>
  );
};

export default LeftSideNav;
