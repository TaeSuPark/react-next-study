"use client"

import VStack from "@/components/FlexBoxGroup/VStack"
import HStack from "@/components/FlexBoxGroup/HStack"

interface ProjectProps {
  title: string
  period: string
  description: string
  skills: string[]
  image?: string
}

const Project = ({
  title,
  period,
  description,
  skills,
  image,
}: ProjectProps) => {
  return (
    <HStack
      gap={32}
      width="100%"
      p="32px"
      bg="white"
      style={{ borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          background: image ? `url(${image}) center/cover` : "#ddd",
          borderRadius: "8px",
        }}
      />

      <VStack gap={16} width="calc(100% - 332px)">
        <HStack justifyContent="space-between" alignItems="center">
          <h3 style={{ fontSize: "24px", fontWeight: 600 }}>{title}</h3>
          <span style={{ color: "#666" }}>{period}</span>
        </HStack>

        <p style={{ lineHeight: "1.6" }}>{description}</p>

        <HStack gap={8} flexWrap="wrap">
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "4px 12px",
                backgroundColor: "#FFF0D8",
                color: "#FB7B0D",
                borderRadius: "16px",
                fontSize: "14px",
              }}
            >
              {skill}
            </span>
          ))}
        </HStack>
      </VStack>
    </HStack>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "포트폴리오 웹사이트",
      period: "2023.01 - 2023.02",
      description:
        "React와 TypeScript를 사용하여 개발한 개인 포트폴리오 웹사이트입니다. 반응형 디자인을 적용하여 다양한 디바이스에서 최적화된 경험을 제공합니다.",
      skills: ["React", "TypeScript", "Styled-Components", "Next.js"],
    },
    {
      title: "쇼핑몰 프로젝트",
      period: "2022.09 - 2022.12",
      description:
        "온라인 쇼핑몰 웹 애플리케이션입니다. 사용자 인증, 상품 검색, 장바구니, 결제 기능을 구현했습니다.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
  ]

  return (
    <VStack gap={40} alignItems="center">
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          period={project.period}
          description={project.description}
          skills={project.skills}
        />
      ))}
    </VStack>
  )
}

export default Projects
