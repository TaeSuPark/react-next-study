import styled from "styled-components"
import theme from "@/styles/theme"

export const SectionContainer = styled.div<{ $bg: string }>`
  padding: 100px 20px;
  background-color: ${({ $bg }) =>
    theme.colors[$bg as keyof typeof theme.colors] || $bg};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.primary};
  }
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;
`
