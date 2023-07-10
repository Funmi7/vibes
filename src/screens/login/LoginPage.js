import { Button, Flex, Text, Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { BsSpotify } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../../firebaseConfig";
import { setLoggedIn, setLoggedOff } from "redux/reducers/authorizationSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLoggedOff());
  }, [dispatch]);

  const handleButtonClicked = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      dispatch(setLoggedIn());
      navigate("/");
    });
  };

  const logoutClicked = () => {
    signOut(auth).then(() => {
      dispatch(setLoggedOff());
      navigate("/login");
    });
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
            Log in with Google
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;

// rgb(29, 185, 84)
