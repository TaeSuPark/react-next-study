"use client"

import { VStackContainer } from "./styled"
import { FlexBoxProps } from "./FlexBox"
import { SpacesType } from "@/styles/theme"

interface VStackProps extends FlexBoxProps {
  gap?: SpacesType
}

const VStack = ({ children, gap = 0, ...props }: VStackProps) => {
  return (
    <VStackContainer $gap={gap} {...props}>
      {children}
    </VStackContainer>
  )
}

export default VStack
