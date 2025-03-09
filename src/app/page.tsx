import Card from "@/components/Card/Card"
import HStack from "@/components/FlexBoxGroup/HStack"
import VStack from "@/components/FlexBoxGroup/VStack"

export default function Page() {
  return (
    <VStack bg="gray-100" justifyContent="center" alignItems="center" gap={32}>
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

      <HStack gap={32}>
        <Card bg="white">안녕하세요1</Card>
        <Card bg="white">안녕하세요2</Card>
      </HStack>
    </VStack>
  )
}
