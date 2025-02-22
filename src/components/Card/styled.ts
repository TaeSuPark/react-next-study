import styled from "styled-components"
import theme, { ColorsType } from "@/styles/theme"

export const CardContainer = styled.div<{ bg: ColorsType }>`
  display: flex;
  background-color: ${({ bg }) => theme.colors[bg]};
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(68, 68, 68, 0.4);
  padding: 16px;
  width: 350px;
  height: 170px;
`
