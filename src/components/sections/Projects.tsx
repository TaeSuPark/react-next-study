"use client"
import styled from "styled-components"
import { Section } from "@/styles/layout.styled"

const ProjectsSection = styled(Section)`
  background-color: #e9ecef;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  padding: 0 20px;
`

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export default function Projects() {
  return (
    <ProjectsSection>
      <ProjectsGrid>
        <h2>Projects</h2>
        <ProjectCard>{/* 프로젝트 내용이 들어갈 자리 */}</ProjectCard>
      </ProjectsGrid>
    </ProjectsSection>
  )
}
