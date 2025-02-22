"use client"

import { ColorsType } from "@/styles/theme"
import { CardContainer } from "./styled"

interface CardProps {
  children: React.ReactNode
  bg: ColorsType
}

export default function Card({ children, bg }: CardProps) {
  return <CardContainer bg={bg}>{children}</CardContainer>
}
