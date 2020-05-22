import React from "react"
import PageTitle from "../PageTitle"
import ContactForm from "./ContactForm"

export default class AboutContent extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Hello! This's me</PageTitle>
        <h2>Who am I</h2>
        <p>
          I'm a full stack developer whos is currently studying a MSc in Computer Engineering at the Universidad Carlos III de Madrid, Spain.
          I'm graduated in Computer Science and Engineering from the same university since 2019, where I focused and specialized in computer
          science and computation (which means artificial intelligence and big data analysis).
        </p>
        <p>
          Proactive, enthusiastic and curious. I never hesitate stepping out of my comfort zone to discover the unknown. What I learn in class
          or at work isn't enough for me, because I always can learn something new. Therefore, I take every free moment I have to keep learning,
          as well as improving the knowledge and skills that I have already acquired.
        </p>
        
        <h2>Contact</h2>
        <p>
          If you want to get in touch with me, just write a mail or contact me on <a href="https://www.linkedin.com/in/aitoralonsonunez" target="_blank" rel="noopener noreferrer"> Linkedin</a>.
          <br></br>
          Don't forget to take a look at <a href="https://github.com/tairosonloa/aalonso.eu" target="_blank" rel="noopener noreferrer"> my GitHub profile</a>!
        </p>
        <ContactForm />

        <h2>Resume</h2>
        You can also download my resume on PDF. The update date of the resume is under the "Contact" section. 
        <ul>
          <li><a href="/documents/Aitor_Alonso_Nunez_CV.pdf" target="_blank" rel="noopener noreferrer">English Resume</a></li>
        </ul>
      </section>
    )
  }
}
