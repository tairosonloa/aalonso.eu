import React, { Component } from "react"

export default class ContactForm extends Component {
    state = {
        reveal: false,
    }

    decodeMail(encodedMail) {
        let decoded = ""
        for(let i = 0; i < encodedMail.length; i++){
            decoded += String.fromCharCode(encodedMail.charCodeAt(i) ^ 33)
        }
        return decoded
    }

    onReveal = () => {
        this.setState({ reveal: true })
    }

    render() {
        let decoded = this.decodeMail("@@MNORNa@@MNORNDT")
        return (
            <section>
                <h2>Contact</h2>
                If you want to get in touch with me, just write a mail or contact me on <a href="https://www.linkedin.com/in/aitoralonsonunez" target="_blank" rel="noopener noreferrer"> Linkedin</a>.
                <div>{"E-Mail: "}
                    {// eslint-disable-next-line
                    this.state.reveal ? <a href={`mailto:${decoded}`}>{`${decoded}`}</a> : <a onClick={this.onReveal}>Click to reveal</a>}
                    <noscript>Please enable Javascript to see the email address.</noscript>
                </div>
            </section>
        )
    }
}
