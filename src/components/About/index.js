import React from "react"
import ContactForm from "./ContactForm"
import PageTitle from "../PageTitle"

export default class AboutContent extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>About</PageTitle>
        <h2>Who Am I</h2>
        <p>
          Hello! I'm Aitor Alonso, and I'm currently studying a Bachelor's Degree in Computer Science and Engineering at
          Universidad Carlos III de Madrid, EPS Polytechnic School of Leganés, Spain. I'm studying a Mention in Computer
          Science, so I'm focusing on artificial intelligence and Big Data Analysis.
        </p>
        <p>
          Free software lover, computing enthusiast and full-stack developer. I spend most of my time learning new things
          and improving my knowledge and skills. I'm crazy by the world of machine learning, artificial neural networks,
          and data analysis. Always I can, I try to collaborate on projects written in python or go or start my owns.
        </p>
        
        <h2>Contact</h2>
        If you want to get in touch with me, just write a mail or contact me on <a href="https://www.linkedin.com/in/aitoralonsonunez" target="_blank" rel="noopener noreferrer"> Linkedin</a>.
        <ContactForm />

        <h2>Resume</h2>
        You can also download my resume on PDF. The update date of the resume is at the PDF's top right corner.
        <ul>
          {/* <li><a href="/resume/Aitor_Alonso_resume.pdf" target="_blank" rel="noopener noreferrer">English Resume</a></li> */}
          <li><a href="/resume/Aitor_Alonso_curriculum.pdf" target="_blank" rel="noopener noreferrer">Spanish Resume</a></li>
        </ul>
      </section>
    )
  }
}