import VStack from "@/components/FlexBoxGroup/VStack"
import Typography from "../Typography/Typograpy"
import HStack from "../FlexBoxGroup/HStack"
import styled from "styled-components"

const RoleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px 2px 12px;
  background-color: #000000;
  border-radius: 6px;
`

interface CareerHeaderProps {
  companyName: string
  period: { startDate: string; endDate: string }
  companyIntro: string
  roles: string[]
}

export default function CareerHeader({
  companyName,
  period,
  companyIntro,
  roles,
}: CareerHeaderProps) {
  return (
    <VStack gap={8}>
      <Typography variant="title" color="black">
        {companyName}
      </Typography>
      <Typography variant="body-m" color="gray-700">
        {`${period.startDate} - ${period.endDate}`}
      </Typography>
      <Typography variant="body-m" color="black">
        {companyIntro}
      </Typography>
      <HStack gap={8}>
        {roles.map((v, idx) => (
          <RoleBox key={idx}>
            <Typography variant="body-m" color="white">
              {v}
            </Typography>
          </RoleBox>
        ))}
      </HStack>
    </VStack>
  )
}
