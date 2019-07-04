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
      <div>{"E-Mail: "}
        {// eslint-disable-next-line
        this.state.reveal ? <a target="_blank" rel="noopener noreferrer" href={`mailto:${decoded}`}>{`${decoded}`}</a> : <a onClick={this.onReveal}>Click to reveal</a>}
        <noscript>Please enable Javascript to see the email address.</noscript>
      </div>
    )
  }
}
