import React from "react"
import ContactForm from "./ContactForm"
import PageTitle from "../PageTitle"

export default class AboutContent extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Hello! This's me</PageTitle>
        <h2>Who am I</h2>
        <p>
          I'm Aitor Alonso, and I'm currently studying a Master's Degree in Computer Science and Engineering at
          Universidad Carlos III de Madrid, EPS Higher Polytechnic School of Leganés, Spain. Previously, I studied 
          a Bachelor's Degree in Computer Science and Engineering at the same university, where I focused and
          specialized in artificial intelligence and Big Data Analysis.
        </p>
        <p>
          Free software lover, computing enthusiast and full-stack developer. I spend most of my time learning new things
          and improving my knowledge and skills. I'm crazy by the world of machine learning, artificial neural networks,
          and data analysis. My preferred programming languages are Python, Golang and JavaScript. 
        </p>
        <p>
          I'm always proactive, such a looking forward to learning. I'm not afraid of making errors, because I'm human,
          and I learn from my mistakes.
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
          <li><a href="/resume/Aitor_Alonso_Nunez_CV.pdf" target="_blank" rel="noopener noreferrer">English Resume</a></li>
        </ul>
      </section>
    )
  }
}
