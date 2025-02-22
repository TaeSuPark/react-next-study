"use client"

import theme, { ColorsType } from "@/styles/theme"
import styled from "styled-components"

interface FlexBoxGroupProps {
  bg?: ColorsType
  height?: string
  justifyContent?: string
  alignItems?: string
  gap?: string
}

export const VStack = styled.div<FlexBoxGroupProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => (bg ? theme.colors[bg] : "")};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`
export const HStack = styled.div<FlexBoxGroupProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ bg }) => (bg ? theme.colors[bg] : "")};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`
