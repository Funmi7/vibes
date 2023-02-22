import { useTheme as _useTheme } from "@chakra-ui/react";

import { CustomTheme } from "./theme";

export const useTheme = (...args: Parameters<typeof _useTheme>) =>
  _useTheme<CustomTheme>(...args);
