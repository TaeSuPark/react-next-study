"use client"
import styled from "styled-components"
import { Section } from "@/styles/layout.styled"

const AboutSection = styled(Section)`
  background-color: #e9ecef;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  padding: 0 20px;
`

export default function About() {
  return (
    <AboutSection>
      <ContentWrapper>
        <h2>About Me</h2>
        <p>여기에 자기소개 내용이 들어갑니다.</p>
      </ContentWrapper>
    </AboutSection>
  )
}
