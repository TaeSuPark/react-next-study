import Card from "@/components/Card/Card"
import { HStack, VStack } from "@/components/FlexBoxGroup/styled"

export default function Page() {
  return (
    <VStack
      bg="gray"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      gap="32px"
    >
      <span
        style={{
          color: "#ffffff",
          fontSize: "48px",
          fontWeight: 700,
          textDecoration: "underline",
        }}
      >
        ARCHIVING
      </span>

      <HStack gap="32px">
        <Card bg="white">안녕하세요1</Card>
        <Card bg="white">안녕하세요2</Card>
      </HStack>
    </VStack>
  )
}
