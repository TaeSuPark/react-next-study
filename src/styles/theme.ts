const variants = {
  title: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 600,
  },
  ["head-b"]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 600,
  },
  ["head-m"]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 500,
  },
  ["head-r"]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 400,
  },
  "body-b": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
  },
  "body-m": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
  },
  "body-r": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },
  "label-b": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 600,
  },
  "label-m": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 500,
  },
  "label-r": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 400,
  },
  "text-b": {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 600,
  },
  "text-m": {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 500,
  },
  "text-r": {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 400,
  },
}
const colors = {
  primary: "#FB7B0D",
  secondary: "#FBA80E",
  tertiary: "#FFDB9A",
  quaternary: "#FFF0D8",
  quinary: "#FFFAF2",
  black: "#000000",
  white: "#FFFFFF",
  lightGray: "#F7F9FA",
  darkGray: "#304A47",
  red: "#FF5478",
  ["kakao-main"]: "#FEE500",
  ["kakao-logo"]: "#191919",
  ["gray-100"]: "#EDF0F2",
  ["gray-200"]: "#EDEDED",
  ["gray-300"]: "#DADADA",
  ["gray-400"]: "#C5C5C5",
  ["gray-500"]: "#AEAEAE",
  ["gray-600"]: "#929292",
  ["gray-700"]: "#727272",
  ["gray-800"]: "#4D4D4D",
  ["gray-900"]: "#272727",
}

const spaces = {
  0: "0px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  22: "22px",
  24: "24px",
  26: "26px",
  28: "28px",
  30: "30px",
  32: "32px",
  34: "34px",
  36: "36px",
  38: "38px",
  40: "40px",
  42: "42px",
  44: "44px",
  48: "48px",
  52: "52px",
  56: "56px",
  60: "60px",
  64: "64px",
}

export type ColorsType = keyof typeof colors
export type VariantsType = keyof typeof variants
export type SpacesType = keyof typeof spaces

const theme = {
  variants,
  colors,
  spaces,
}

export default theme
