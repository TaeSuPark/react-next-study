"use client"
import styled from "styled-components"
import { Section } from "@/styles/layout.styled"

const SkillsSection = styled(Section)`
  background-color: #f8f9fa;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  padding: 0 20px;
`

export default function Skills() {
  return (
    <SkillsSection>
      <SkillsGrid>
        <h2>Skills</h2>
        {/* 스킬 아이템들이 들어갈 자리 */}
      </SkillsGrid>
    </SkillsSection>
  )
}
