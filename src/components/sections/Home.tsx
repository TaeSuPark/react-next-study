"use client"
import styled from "styled-components"
import { Section } from "@/styles/layout.styled"
import { theme } from "@/styles/GlobalStyle"

const HomeSection = styled(Section)`
  background-color: ${theme.colors.home};
  transition: all 0.5s ease;
`

export default function Home() {
  return (
    <HomeSection>
      <h1>Welcome to My Portfolio</h1>
    </HomeSection>
  )
}
