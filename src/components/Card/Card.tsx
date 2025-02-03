"use client"

import styled from "styled-components"
import InnerCompo from "../InnerCompo/InnerCompo"

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  bgColor?: string
}

const CardContainer = styled.div<{ bg: string }>`
  width: max-content;
  height: max-content;
  background-color: ${(props) => props.bg};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`

export default function Card({ children, bgColor = "#ffffff" }: CardProps) {
  return (
    <CardContainer bg={bgColor}>
      <InnerCompo />
      {children}
    </CardContainer>
  )
}
