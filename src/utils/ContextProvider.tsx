"use client"

import { createContext, useState } from "react"

export type UserType = {
  name: string
  age: number
}

export const userContext = createContext<UserType | undefined>(undefined)

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  // api 통신
  // jwt token
  const [name] = useState("박태수")
  const [age] = useState(31)

  return (
    <userContext.Provider value={{ name: name, age: age }}>
      {children}
    </userContext.Provider>
  )
}
