"use client"

import { ReactNode } from "react"
import { SectionContainer, SectionTitle, SectionContent } from "./styled"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  bg?: string
}

const Section = ({ id, title, children, bg = "white" }: SectionProps) => {
  return (
    <SectionContainer id={id} $bg={bg}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  )
}

export default Section
