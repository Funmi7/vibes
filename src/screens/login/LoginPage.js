import { Button, Flex, Text, Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { BsSpotify } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { getAuthorizeHref } from "oauthConfig";
import { setLoggedIn, setLoggedOff } from "redux/reducers/authorizationSlice";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedOff());
  }, [dispatch]);

  const handleButtonClicked = (e) => {
    e.preventDefault();
    dispatch(setLoggedIn());
    window.open(getAuthorizeHref(), "_self");
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      backgroundImage="/img/login-bg.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center"
    >
      <Box w="50%" />
      <Flex w="50%" alignItems="center" flexDirection="column">
        <Heading textStyle="h1" mb="20px">
          Vibes!
        </Heading>
        <Text textStyle="small" color="white" mb="100px">
          A music streaming platform
        </Text>

        <Button
          bgColor="rgb(29, 185, 84)"
          p="2"
          h="68px"
          w="400px"
          leftIcon={<BsSpotify size="30px" color="white" />}
          onClick={handleButtonClicked}
        >
          <Text textStyle="h2" color="white" ml="4">
            Log in with Spotify
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;

// rgb(29, 185, 84)
