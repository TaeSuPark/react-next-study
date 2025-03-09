import theme, { ColorsType, VariantsType } from "@src/styles/commonTheme"
import styled from "styled-components"

interface TypographyProps {
  $variant: VariantsType
  $color: ColorsType
  $textAlign: string
  $underLine?: boolean
  $italic?: boolean
  ellipsis?: boolean
  noWrap?: boolean
  pl?: number
  pr?: number
}

export const Span = styled.span<TypographyProps>`
  text-align: ${({ $textAlign }) => $textAlign};
  font-weight: ${({ $variant }) => theme.variants[$variant].fontWeight};
  font-size: ${({ $variant }) => theme.variants[$variant].fontSize};
  line-height: ${({ $variant }) => theme.variants[$variant].lineHeight};
  color: ${({ $color }) => theme.colors[$color]};
  text-decoration: ${({ $underLine }) => ($underLine ? "underline" : "none")};
  text-underline-position: under;
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  padding-left: ${({ pl }) => pl}px;
  padding-right: ${({ pr }) => pr}px;
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "normal")};
  overflow: ${({ ellipsis }) => (ellipsis ? "hidden" : "visible")};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
