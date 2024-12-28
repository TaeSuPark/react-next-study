interface TestCompoProps {
  num: number
}

export default function TestCompo({ num }: TestCompoProps) {
  return (
    <div>
      <h3>테스트입니다. {num}</h3>
    </div>
  )
}
