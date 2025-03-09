import AnchorHeader from "@/components/AnchorHeader/AnchorHeader"
import Section from "@/components/Section/Section"
import AboutMe from "@/components/AboutMe/AboutMe"
import Skills from "@/components/Skills/Skills"
import Archiving from "@/components/Archiving/Archiving"
import Projects from "@/components/Projects/Projects"
import Career from "@/components/Career/Career"

export default function Home() {
  const menus = ["About Me", "Skills", "Archiving", "Projects", "Career"]

  return (
    <div>
      <AnchorHeader menus={menus} />

      <Section id="about-me" title="About Me" bg="white">
        <AboutMe />
      </Section>

      <Section id="skills" title="Skills" bg="gray-100">
        <Skills />
      </Section>

      <Section id="archiving" title="Archiving" bg="white">
        <Archiving />
      </Section>

      <Section id="projects" title="Projects" bg="gray-100">
        <Projects />
      </Section>

      <Section id="career" title="Career" bg="white">
        <Career />
      </Section>
    </div>
  )
}
