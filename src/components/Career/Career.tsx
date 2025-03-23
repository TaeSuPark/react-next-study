"use client"

import VStack from "@/components/FlexBoxGroup/VStack"
import HStack from "@/components/FlexBoxGroup/HStack"
import React from "react"
import CareerHeader from "../CareerContentGroup/CareerHeader"
import CareerInfo from "../CareerContentGroup/CareerInfo"
import styled from "styled-components"
import Typography from "../Typography/Typograpy"

const mockCareer = [
  {
    companyName: "(주) 당근 마켓",
    period: { startDate: "2024-01-01", endDate: "재직중" },
    companyIntro: "이웃과 더 가까워지는 따뜻한 동네를 만들어요",
    roles: ["프론트엔드"],
    items: [
      {
        title: "지역 동네 업체 정보(비즈프로필) 관련 개발",
        period: { startDate: "2024-01-01", endDate: "진행중" },
        content:
          "이웃의 사장님들과 고객님들을 효과적으로 연결하기 위한 비즈프로필 관련 기능 개발",
      },
    ],
  },
  {
    companyName: "(주) 오픈 갤러리",
    period: { startDate: "2020-01-01", endDate: "2023-12-31" },
    companyIntro:
      "그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 그림 렌탈 서비스 플랫폼",
    roles: ["프론트엔드", "백엔드", "백오피스 기획", "테크 리딩"],
    items: [
      {
        title: "작가 개인용 웹사이트 전체 리뉴얼 (Next.js)",
        period: { startDate: "2024-01-01", endDate: "진행중" },
        content:
          "Django 풀 스택 기반의 작가 개인용 웹사이트를 Next.js와 Django REST 기반으로 마이그레이션",
      },
      {
        title: "서버 배포 환경 변경 (AWS ECS)",
        period: { startDate: "2022-01-01", endDate: "2022-06-30" },
        content:
          "서버 배포 환경을 AWS EB에서 Docker 기반의 AWS ECS로 변경 (개발 환경도 함께 변경)",
      },
      {
        title: "대규모 서버 정리 작업 리드",
        period: { startDate: "2021년 하반기" },
        content:
          "대규모 서버 정리 작업을 주도적으로 진행하여 코드 베이스 전반의 대청소 작업을 진행",
      },
      {
        title: "개발 업무 외 기타 업무 담당",
        period: { startDate: "2020년 상반기" },
        content:
          "채용, 사수, 코드 리뷰의 역할을 담당하고 팀 내에서 지식 공유와 문서화를 적극적으로 진행",
      },
      {
        title: "백 오피스의 전반적인 관리 및 각종 기능 개발/기획",
        period: { startDate: "2019년 하반기" },
        content:
          "백 오피스의 전반적인 관리 및 각종 기능 개발/기획을 담당하여 사내 직원의 업무 효율 개선",
      },
    ],
  },
]

const CareerContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #c8c8c8;
`

export default function Career() {
  return (
    <VStack>
      <HStack gap={24}>
        <VStack>
          <CareerContainer>
            <Typography variant="title" color="black">
              경력사항
            </Typography>
          </CareerContainer>
        </VStack>
        <VStack gap={48}>
          {mockCareer.map((career, idx) => (
            <VStack key={idx} gap={24}>
              <CareerHeader {...career} />
              <CareerInfo items={career.items} />
            </VStack>
          ))}
        </VStack>
      </HStack>
    </VStack>
  )
}
