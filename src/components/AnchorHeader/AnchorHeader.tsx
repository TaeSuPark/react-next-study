"use client"

import { useState, useEffect } from "react"
import { HeaderContainer, NavContainer, NavItem } from "./styled"

interface HeaderProps {
  menus: string[]
}

const Header = ({ menus }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = menus
        .map((menu) => {
          const element = document.getElementById(
            menu.toLowerCase().replace(" ", "-")
          )
          if (element) {
            return {
              id: menu,
              offsetTop: element.offsetTop,
              height: element.offsetHeight,
            }
          }
          return null
        })
        .filter(Boolean)

      const scrollPosition = window.scrollY + 100 // 헤더 높이 고려

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.height
        ) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [menus])

  const handleClick = (menu: string) => {
    const id = menu.toLowerCase().replace(" ", "-")
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // 헤더 높이 고려
        behavior: "smooth",
      })
    }
  }

  return (
    <HeaderContainer>
      <NavContainer>
        {menus.map((menu) => (
          <NavItem
            key={menu}
            onClick={() => handleClick(menu)}
            $active={activeSection === menu}
          >
            {menu}
          </NavItem>
        ))}
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
