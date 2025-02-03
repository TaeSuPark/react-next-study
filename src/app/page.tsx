"use client"

import { getCatImg } from "@/apis/commonApis"
import Card from "@/components/Card/Card"
import { useDataStore } from "@/stores/useStores"

import { useQuery, useQueryClient } from "@tanstack/react-query"

export default function Root() {
  const queryClient = useQueryClient()

  const { str, num, increment, decrement } = useDataStore()

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
      <Card>
        <p>{`Zustand data : ${str} / ${num}`}</p>
      </Card>

      <button onClick={invaildateCatImg}>Get Cat Image</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}
