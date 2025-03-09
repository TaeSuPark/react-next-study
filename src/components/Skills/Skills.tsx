"use client"

import VStack from "@/components/FlexBoxGroup/VStack"
import HStack from "@/components/FlexBoxGroup/HStack"

interface SkillItemProps {
  name: string
  level: number
}

const SkillItem = ({ name, level }: SkillItemProps) => {
  return (
    <VStack gap={8} width="100%">
      <HStack justifyContent="space-between">
        <span>{name}</span>
        <span>{level}%</span>
      </HStack>
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#eee",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${level}%`,
            height: "100%",
            backgroundColor: "#FB7B0D",
            borderRadius: "5px",
          }}
        />
      </div>
    </VStack>
  )
}

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "SQL", level: 55 },
  ]

  return (
    <HStack gap={64} justifyContent="center">
      <VStack gap={24} width="45%">
        <h3 style={{ fontSize: "24px", fontWeight: 600 }}>프론트엔드</h3>
        {frontendSkills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </VStack>

      <VStack gap={24} width="45%">
        <h3 style={{ fontSize: "24px", fontWeight: 600 }}>백엔드</h3>
        {backendSkills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </VStack>
    </HStack>
  )
}

export default Skills
