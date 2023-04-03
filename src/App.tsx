import AllRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "design/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "redux/store";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AllRoutes />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
