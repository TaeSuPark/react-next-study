"use client"

import VStack from "@/components/FlexBoxGroup/VStack"
import HStack from "@/components/FlexBoxGroup/HStack"

interface CareerItemProps {
  company: string
  position: string
  period: string
  description: string[]
}

const CareerItem = ({
  company,
  position,
  period,
  description,
}: CareerItemProps) => {
  return (
    <VStack
      gap={16}
      width="100%"
      p="32px"
      bg="white"
      style={{ borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <VStack gap={4}>
          <h3 style={{ fontSize: "24px", fontWeight: 600 }}>{company}</h3>
          <span style={{ color: "#666" }}>{position}</span>
        </VStack>
        <span style={{ color: "#666" }}>{period}</span>
      </HStack>

      <ul style={{ paddingLeft: "20px" }}>
        {description.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px", lineHeight: "1.6" }}>
            {item}
          </li>
        ))}
      </ul>
    </VStack>
  )
}

const Career = () => {
  const careers = [
    {
      company: "ABC 기술",
      position: "프론트엔드 개발자",
      period: "2021.03 - 현재",
      description: [
        "React와 TypeScript를 사용하여 웹 애플리케이션 개발",
        "사용자 경험 개선을 위한 UI/UX 리뉴얼 프로젝트 주도",
        "성능 최적화를 통해 페이지 로딩 시간 40% 단축",
        "주니어 개발자 멘토링 및 코드 리뷰 진행",
      ],
    },
    {
      company: "XYZ 스튜디오",
      position: "웹 개발자",
      period: "2019.07 - 2021.02",
      description: [
        "HTML, CSS, JavaScript를 사용한 웹사이트 개발",
        "반응형 웹 디자인 구현",
        "WordPress 기반 웹사이트 커스터마이징",
        "클라이언트와 협업하여 요구사항 분석 및 구현",
      ],
    },
  ]

  return (
    <VStack gap={40} alignItems="center">
      {careers.map((career) => (
        <CareerItem
          key={career.company}
          company={career.company}
          position={career.position}
          period={career.period}
          description={career.description}
        />
      ))}
    </VStack>
  )
}

export default Career
