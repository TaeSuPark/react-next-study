"use client"

import { getCatImg } from "@/apis/commonApis"
import Card from "@/components/Card/Card"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export default function Root() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ["catImg"],
    queryFn: getCatImg,
  })

  const invaildateCatImg = () => {
    queryClient.invalidateQueries({ queryKey: ["catImg"] })
  }
  return (
    <div>
      <Card>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={data?.[0].url} width={600} height={400} />
        )}
      </Card>
      <button onClick={invaildateCatImg}>Get Cat Image</button>
    </div>
  )
}
