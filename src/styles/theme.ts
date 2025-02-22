"use client"

const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: "#272727",
  blue: "#0000FF",
}

const variants = {
  header: {
    fontSize: "48px",
    fontWeight: 700,
  },
  subTitle: {
    fontSize: "24px",
    fontWeight: 700,
  },
  body: {
    fontSize: "16px",
    fontWeight: 500,
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
  },
}
const spaces = {}

export type ColorsType = keyof typeof colors
export type VariantsType = keyof typeof variants
export type SpacesType = keyof typeof spaces

const theme = {
  colors,
  variants,
  spaces,
}

export default theme
