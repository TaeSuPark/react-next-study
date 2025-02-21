"use client"
import { useEffect, useRef, useState } from "react"
import { MainContainer } from "@/styles/layout.styled"
import Home from "@/components/sections/Home"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import PageIndicator from "@/components/PageIndicator"

const SCROLL_ANIMATION_DURATION = 700
const DEBOUNCE_DELAY = 10

export default function ClientRoot() {
  const [currentSection, setCurrentSection] = useState(0)
  const scrollingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const currentSectionRef = useRef(currentSection)
  const lastWheelTime = useRef(Date.now())

  useEffect(() => {
    currentSectionRef.current = currentSection
  }, [currentSection])

  const handleSectionChange = (index: number) => {
    if (index >= 0 && index <= 4) {
      setCurrentSection(index)
      sectionsRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex(
              (section) => section === entry.target
            )
            if (index !== -1) {
              setCurrentSection(index)
            }
          }
        })
      },
      {
        threshold: 0.7,
      }
    )

    const sections = document.querySelectorAll("section")
    sectionsRef.current = Array.from(sections) as HTMLDivElement[]
    sections.forEach((section) => observer.observe(section))

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (
        scrollingRef.current ||
        now - lastWheelTime.current < DEBOUNCE_DELAY
      ) {
        e.preventDefault()
        return
      }

      lastWheelTime.current = now
      e.preventDefault()
      scrollingRef.current = true

      const delta = e.deltaY
      const nextSection =
        delta > 0
          ? currentSectionRef.current + 1
          : currentSectionRef.current - 1

      if (nextSection >= 0 && nextSection <= 4) {
        sectionsRef.current[nextSection]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        setCurrentSection(nextSection)
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        scrollingRef.current = false
      }, SCROLL_ANIMATION_DURATION + 50)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      window.removeEventListener("wheel", handleWheel)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <MainContainer>
      <PageIndicator
        activeSection={currentSection}
        onSectionChange={handleSectionChange}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </MainContainer>
  )
}
