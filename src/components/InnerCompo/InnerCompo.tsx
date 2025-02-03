import { useDataStore } from "@/stores/useStores"
import { userContext } from "@/utils/ContextProvider"
import { useContext } from "react"

export default function InnerCompo() {
  const context = useContext(userContext)
  const { str } = useDataStore()

  return (
    <div>
      <p>{context?.name}</p>
      <p>{context?.age}</p>
      <p>{str}</p>
    </div>
  )
}
