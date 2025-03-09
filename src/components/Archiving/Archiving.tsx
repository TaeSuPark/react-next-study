"use client"

import VStack from "@/components/FlexBoxGroup/VStack"
import HStack from "@/components/FlexBoxGroup/HStack"
import Card from "@/components/Card/Card"

interface ArchiveItemProps {
  icon: string
  title: string
  link: string
  description: string
}

const ArchiveItem = ({ icon, title, link, description }: ArchiveItemProps) => {
  return (
    <Card bg="white">
      <VStack gap={16} height="100%">
        <HStack gap={16} alignItems="center">
          <div style={{ fontSize: "32px" }}>{icon}</div>
          <VStack>
            <h4 style={{ fontSize: "20px", fontWeight: 600 }}>{title}</h4>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FB7B0D", textDecoration: "none" }}
            >
              {link}
            </a>
          </VStack>
        </HStack>
        <p style={{ lineHeight: "1.6" }}>{description}</p>
      </VStack>
    </Card>
  )
}

const Archiving = () => {
  const archives = [
    {
      icon: "📚",
      title: "GitHub",
      link: "https://github.com/username",
      description:
        "소스 코드 저장소입니다. 개인 프로젝트와 기여한 오픈소스 프로젝트를 확인할 수 있습니다.",
    },
    {
      icon: "✏️",
      title: "블로그",
      link: "https://blog.example.com",
      description:
        "개발 관련 글을 작성하는 블로그입니다. 새로운 기술과 문제 해결 과정을 공유합니다.",
    },
  ]

  return (
    <VStack gap={32} alignItems="center">
      <p style={{ textAlign: "center", maxWidth: "700px" }}>
        개발 과정과 결과물을 기록하고 공유하는 공간입니다.
      </p>

      <HStack gap={32} justifyContent="center">
        {archives.map((archive) => (
          <ArchiveItem
            key={archive.title}
            icon={archive.icon}
            title={archive.title}
            link={archive.link}
            description={archive.description}
          />
        ))}
      </HStack>
    </VStack>
  )
}

export default Archiving
