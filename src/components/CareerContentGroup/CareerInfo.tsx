import styled from "styled-components"
import VStack from "../FlexBoxGroup/VStack"
import Typography from "../Typography/Typograpy"
import React from "react"

interface CareerInfoItem {
  title: string
  period: { startDate: string; endDate?: string }
  content: string
}

interface CareerInfoProps {
  items: CareerInfoItem[]
}

const TitleBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border-left: 4px solid #000000;
  padding-left: 12px;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c8c8c8;
`

export default function CareerInfo({ items }: CareerInfoProps) {
  return (
    <VStack gap={12}>
      {items.map((item, idx) => (
        <React.Fragment key={item.title}>
          <TitleBox>
            <Typography variant="body-b" color="gray-900">
              {item.title}
            </Typography>
          </TitleBox>
          <Typography variant="label-m" color="gray-600">
            {`${item.period.startDate} ${
              item.period.endDate ? `- ${item.period.endDate}` : ""
            }`}
          </Typography>
          <Typography variant="label-m" color="gray-900">
            {item.content}
          </Typography>
          {idx !== items.length - 1 && <Line />}
        </React.Fragment>
      ))}
    </VStack>
  )
}
