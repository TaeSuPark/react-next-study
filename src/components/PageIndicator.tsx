"use client"
import styled from "styled-components"

const Indicator = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 100;
`

const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: ${(props) => (props.$active ? "#000" : "#ccc")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    background-color: ${(props) => (props.$active ? "#000" : "#666")};
  }
`

const sections = ["home", "about", "skills", "projects", "contact"]

interface PageIndicatorProps {
  activeSection: number
  onSectionChange: (index: number) => void
}

export default function PageIndicator({
  activeSection,
  onSectionChange,
}: PageIndicatorProps) {
  return (
    <Indicator>
      {sections.map((section, index) => (
        <Dot
          key={section}
          $active={activeSection === index}
          onClick={() => onSectionChange(index)}
          aria-label={`Move to ${section} section`}
        />
      ))}
    </Indicator>
  )
}
