"use client"

import { ColorsType, SpacesType } from "@/styles/theme"
import { FlexBoxContainer } from "./styled"

export interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  p?: string
  pt?: SpacesType
  pr?: SpacesType
  pb?: SpacesType
  pl?: SpacesType
  m?: string
  mt?: SpacesType
  mr?: SpacesType
  mb?: SpacesType
  ml?: SpacesType
  bg?: ColorsType
  border?: string
  borderRadius?: SpacesType
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
  overflowX?: string
  overflowY?: string
  boxShadow?: string
  flexWrap?: string
  onClick?: () => void
}

const FlexBox = ({
  children,
  justifyContent,
  alignItems,
  flexGrow,
  border,
  borderRadius,
  flexWrap,
  ...props
}: FlexBoxProps) => {
  return (
    <FlexBoxContainer
      {...props}
      $flexGrow={flexGrow}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $border={border}
      $borderRadius={borderRadius}
      $flexWrap={flexWrap}
      style={{ ...props.style }}
    >
      {children}
    </FlexBoxContainer>
  )
}

export default FlexBox
