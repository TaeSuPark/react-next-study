"use client"
import styled from "styled-components"
import { Section } from "@/styles/layout.styled"

const ContactSection = styled(Section)`
  background-color: #f8f9fa;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  padding: 0 20px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export default function Contact() {
  return (
    <ContactSection>
      <ContactForm>
        <h2>Contact Me</h2>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message" />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactSection>
  )
}
