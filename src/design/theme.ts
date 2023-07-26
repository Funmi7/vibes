import { extendTheme } from "@chakra-ui/react";
// import { components } from "./components";

const space = {
  px: "1px",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  4.5: "1.125rem", // 18px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
};

const breakpoints = {
  sm: "20em", // 320px
  md: "48em", // 768px
  lg: "64em", // 1024px
  xl: "80em", // 1280px
  "2xl": "90em", // 1440px
};

const sizes = {
  ...space,
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

const textStyles = {
  h1: {
    fontWeight: 700,
    fontSize: "35px",
    lineHeight: "120%",
    color: "#FFFFFF",
  },
  h2: {
    fontWeight: 700,
    fontSize: "2xl",
    lineHeight: "120%",
    color: "#FFFFFF",
  },
  h4: {
    fontWeight: 700,
    fontSize: "sm",
    lineHeight: "120%",
  },
  smaller: {
    fontWeight: 400,
    fontSize: "xs",
    lineHeight: "120%",
  },
  small: {
    fontWeight: 400,
    fontSize: "sm",
    lineHeight: "120%",
  },
  bigText: {
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "120%",
  },
  smallest: {
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "120%",
  },
};

const fontWeights = {
  thin: "300",
  normal: "400",
  boldXs: "500",
  boldSm: "600",
  bold: "700",
};

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  primaryBg: "#1D2123",
  menuBg: "#1A1E1F",
  mainSecondary: "#FACD66",
  cyanBlue: "#A4C7C6",
  red: "#E5524A",
  gray: {
    50: "#ffffff1a",
    100: "#ffffff3f",
    200: "#efeee03f",
    300: "#ffffff7f",
    400: "#ffffff1c",
    500: "#ffffff70",
    600: "#ffffffa",
    700: "#EFEEE0",
  },
};

const shadows = {
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  card: "-3px -3px 0px rgba(238, 238, 244, 0.2), 2px 3px 4px rgba(235, 235, 255, 0.3)",

  card1: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  card2: "0px 4px 16px rgba(0, 0, 0, 0.08)",
  card3:
    "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  avatar:
    "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
  none: "none",
  scopeButton: `0px 1px 2px #1018280d`,
  calendar: `15px 30px 40px rgba(64, 25, 109, 0.07)`,
  main: "4px 4px 3px 2px #F7F7F7",
};

const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  header: 1,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xls: "0.625rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  "4xl": "2rem",
  round: "50%",
  full: "9999px",
};

const opacity = {
  0: "0",
  "20%": "0.2",
  "30%": "0.3",
  "40%": "0.4",
  "60%": "0.6",
  "80%": "0.8",
  "100%": "1",
};

const borders = {
  none: 0,
  "0.1px": "0.1px solid",
  "0.5px": "0.5px solid",
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid",
};

const durations = {
  instant: "0s",
  quick: "0.2s",
  default: "0.4s",
  slow: "0.6s",
  verySlow: "0.9s",
};

const easings = {
  default: "ease-in-out",
};

const transitions = {
  allEase: "all ease 500ms",
  cspEase: "opacity ease 500ms",
};

const globalStyles = {
  color: "textPrimary",
  "a:hover": {
    cursor: "pointer",
  },
};

const customFonts = {
  heading: `"Quicksand", sans-serif`,
  body: `"Quicksand", sans-serif`,
};

const customTheme = {
  styles: {
    global: globalStyles,
  },
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  durations,
  easings,
  sizes,
  shadows,
  space,
  fontWeights,
  transitions,
  //   components,
  breakpoints,
  fonts: customFonts,
  textStyles: textStyles,
};

export type CustomTheme = typeof customTheme;

export default extendTheme(customTheme);
