import AllRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./design/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
