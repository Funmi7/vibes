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
  xl: "75em", // 1200px
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
  disabled: "#E0E2DF",
  headerPrimary: "#14142B",
  textPrimary: "#394455",
  textSecondary: "#A0A8A9",
  textLabel: "#E5E5E5",
  textPlaceholder: "#EFF0F6",
  textLine: "#DCD6CF",
  inputBg: "#EFF0F7",
  primaryBg: "#F7F7FC",
  lotion: "#FCFCFC",
  redviolet: "#B73A7D",
  bittersweet: "#F26B61",
  cyan: "#73E6BD",
  midPurple: "#E0E5F5",
  lightCyan: "#F5F8FF",
  offwhite: {
    50: "#F8F8F8",
    100: "#FAFAFF",
    150: "#F8F8FF",
    200: "#F2F3F4",
    250: "#F5F2F4",
    300: "#F2F4F4",
    350: "#FDFEFE",
    400: "#F8F9F9",
    450: "#FDFEF",
    500: "#F7F9F9",
    550: "#F0F3F4",
    600: "#F9F5FF",
    650: "#F4F6F7",
    700: "#E5E7E9",
    750: "#D6D7D7",
    800: "#F9FAFF",
    850: "#FFF2F9",
  },
  primary: {
    50: "#5150A0",
    100: "#8180FF",
    150: "#1A1A33",
    200: "#7473E6",
    300: "#6766CC",
    400: "#5A59B3",
    500: "#414080",
    600: "#343366",
    700: "#27274D",
    800: "#24292F",
    900: "#0D0D1A",
  },
  secondary: {
    50: "#A0507B",
    100: "#FF80C4",
    150: "#D7CCE5",
    200: "#E673B0",
    250: "#5957CB",
    300: "#CC669C",
    400: "#B35989",
    500: "#804062",
    600: "#66334E",
    700: "#4D273B",
    800: "#331A27",
    900: "#1A0D14",
  },
  lavender: {
    50: "#EBDEF0",
    100: "#7350A0",
    150: "#B780FF",
    200: "#A473E6",
    250: "#5957CB",
    300: "#9266CC",
    350: "#A569BD",
    400: "#8059B3",
    450: "#D7CCE5",
    500: "#5B4080",
    550: "#8B8ADB",
    600: "#493366",
    650: "#7244AC",
    700: "#37274D",
    750: " #F2F2F9",
    800: "#251A33",
    900: "#120D1A",
  },
  blue: {
    50: "#43608C",
    100: "#80B3FF",
    150: "#3498DB",
    200: "#73A1E6",
    250: "#0354CA",
    300: "#668FCC",
    400: "#597DB3",
    500: "#405980",
    600: "#334766",
    700: "#27364D",
    800: "#1A2433",
    900: "#0D121A",
  },
  gray: {
    25: "#EAECF0",
    50: "#ADADAD",
    100: "#FAFAFA",
    125: "#f3f3f4",
    150: "#667085",
    175: "#979A9A",
    200: "#F5F5F5",
    300: "#EBEBEB",
    350: "#F2F2F9",
    400: "#DBDBDB",
    450: "#F9FAFF",
    500: "#808080",
    600: "#616161",
    700: "#4F4F4F",
    750: "#363946",
    800: "#363636",
    850: "#101828",
    900: "#262626",
    950: "#626567",
  },
  ash: {
    25: "#00000019",
    50: "#dbdce07f",
    75: "#00000020",
    100: "#D7DBDD",
    150: "#A6ACAF",
    200: "#6A696A",
    250: "#909497",
    300: "#949395",
    350: "#E5E8E8",
    400: "#EAECF0",
    450: "#3498DB",
    500: "#ECF0F1",
    550: "#848484",
    600: "#00000033",
    650: "#949395",
    700: "#CACFD2",
    750: "#404040",
    800: "#595A5A",
    850: "#687384",
    900: "#687383",
  },
  green: {
    25: "#D7F7C2",
    50: "#E8FDE9",
    100: "#EAFAF1",
    150: "#029457",
    200: "#2ECC71",
    250: "#28B463",
    300: "#408069",
    350: "#239B56",
    400: "#438C46",
    450: "#006909",
    500: "#38A169",
  },
  purple: {
    100: "#F5EEF8",
    200: "#6C348380",
    250: "#E8E2F7",
    300: "#7473E5",
    450: "#543E7A",
    500: "#722BC6",
    550: "#5865f2",
    600: "#5E2E71",
  },
  slate: {
    50: "#f6f8fa",
    100: "#dbdbdb",
    150: "#BDC3C7",
    200: "#B3B6B7",
    250: "#797D7F",
    300: "#EBEDEF",
    350: "#d0d7de",
  },
  chalk: {
    50: "#FAFAFC",
    75: "#e5e5e5",
    100: "#F7F7F8",
    150: "#f3f3f4",
    200: "#F5F8FB",
    250: "#d7dbdd",
    350: "#979A9",
    400: "#EBEEF2",
    450: "#F4F5F7",
    500: "#57606a",
    550: "#F5F8FC",
    600: "#EBEEF3",
  },
  amber: {
    100: "#414242",
    200: "#444444",
    300: "#633974",
    350: "#191A24",
    400: "#292841",
    450: "#3A3335",
    500: "#3F4040",
    600: "#1e1f21",
    650: "#212121",
  },
  violet: {
    25: "#D8DAFF",
    50: "#292841",
    75: "#F5EFFF",
    100: "#414EED",
    150: "#808AFF50",
    200: "#7A73FF",
    250: "#5A57CB",
    300: "#826AED",
    350: "#F3F1FD",
    400: "#625AFA",
    450: "#5765F3",
    500: "#5B2C6F",
    550: "#512E5F",
    600: "#5D46EA",
  },
  red: {
    25: "#FDEDEC",
    50: "#FFE5F4",
    100: "#EC7063",
    150: "#E74C3C",
    200: "#FC526A",
    250: "#E53E3E",
  },
  torquoise: {
    100: "#E5F1FF",
    150: "#E5F1FF",
    200: "#CFF5F6",
    250: "#0653C9",
    300: "#F3F0FE",
  },
  yellow: {
    50: "#FEEBC8",
    100: "#F39C12",
    150: "#FFEECF",
    200: "#FEC98F",
    250: "#F26523",
  },
  purpleBlue: "#5865ff",
  tint: "#00000040",
  coffee: "#202020",
  ashblue: "#6495ED",
  error: "#E30000",
  errorBody: "#F23122",
  stream: "#F5B041",
  fade: "#ffffff60",
  success: "#029457",
  info: "#3182ce",
  warning: "#E1651D",
  errorBg: "#FEF3F2",
  // errorBody: '#F23122',
  warningBg: "#FFFAEB",
  betaBlue: "#2874A6",
  deeBlue: "#2da44e",
  backdropBlur: "#F7F7F885",
  lightPurple: "#B6B9FF60",
  highlight: "#FAFBFC",
  subtle: "#4A235A",
  ligten: "#ffffff50",
  subvisible: "#ffffff90",
  offwhiteBorder: "#E5E7E945",
  lightBorder: "#E5E7E960",
  mediumBorder: "#E5E7E990",
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
  disabled: `1px solid ${colors.disabled}`,
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
  heading: `"Poppins", sans-serif`,
  body: `"Poppins", sans-serif`,
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
};

export default extendTheme(customTheme);
