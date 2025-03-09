"use client"

import { ColorsType, SpacesType, VariantsType } from "@/styles/theme"
import { Span } from "./styled"

interface TypographyProps {
  variant: VariantsType
  color?: ColorsType
  textAlign?: string
  underLine?: boolean
  italic?: boolean
  pl?: SpacesType
  pr?: SpacesType
  ellipsis?: boolean
  noWrap?: boolean
  children: React.ReactNode
}

const Typography = ({
  variant,
  color = "black",
  textAlign = "left",
  underLine,
  italic,
  pl,
  pr,
  ellipsis,
  noWrap,
  children,
}: TypographyProps) => {
  return (
    <Span
      $variant={variant}
      $color={color}
      $textAlign={textAlign}
      $underLine={underLine}
      $italic={italic}
      pl={pl}
      pr={pr}
      ellipsis={ellipsis}
      noWrap={noWrap}
    >
      {children}
    </Span>
  )
}

export default Typography
