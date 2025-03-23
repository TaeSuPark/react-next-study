"use client"

import VStack from "@/components/FlexBoxGroup/VStack"
import HStack from "@/components/FlexBoxGroup/HStack"
import Card from "@/components/Card/Card"
import Typography from "../Typography/Typograpy"

const AboutMe = () => {
  return (
    <VStack gap={32} alignItems="center">
      <HStack gap={32} alignItems="center">
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            overflow: "hidden",
            background: "#ddd",
          }}
        >
          {/* 프로필 이미지 */}
        </div>
        <VStack gap={16} width="60%">
          <Typography variant="head-b" color="black">
            안녕하세요, 저는 개발자 000입니다
          </Typography>
          <Typography variant="body-m" color="black">
            사용자 경험을 중요시하는 프론트엔드 개발자로, 새로운 기술을 배우고
            적용하는 것을 좋아합니다. 문제 해결에 열정을 가지고 있으며, 팀과
            협업하여 최상의 결과물을 만들어내는 것을 목표로 합니다.
          </Typography>
        </VStack>
      </HStack>

      <HStack gap={16} justifyContent="center">
        <Card bg="white">
          <VStack gap={8} alignItems="center">
            <Typography variant="body-b" color="black">
              이메일
            </Typography>
            <Typography variant="body-m" color="black">
              example@email.com
            </Typography>
          </VStack>
        </Card>
        <Card bg="white">
          <VStack gap={8} alignItems="center">
            <h4>전화번호</h4>
            <p>010-1234-5678</p>
          </VStack>
        </Card>
        <Card bg="white">
          <VStack gap={8} alignItems="center">
            <h4>위치</h4>
            <p>서울특별시</p>
          </VStack>
        </Card>
      </HStack>
    </VStack>
  )
}

export default AboutMe
