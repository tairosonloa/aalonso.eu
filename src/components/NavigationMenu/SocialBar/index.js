import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { css } from "glamor"
import GitHubIcon from "./icons/github.svg"
import LinkedInIcon from "./icons/linkedin.svg"
import EmailIcon from "./icons/mail-2.svg"
import TelegramIcon from "./icons/telegram.svg"
import TwitterIcon from "./icons/twitter.svg"
import { singleColumnMediaQuery } from "../../../styling"

const iconStyles = scale =>
  css({
    width: 20,
    height: 20,
    border: "none",
    outline: "none",
    transition: "all 0.4s ease-in-out",
    transform: `scale(${scale})`,
    // make all icons black
    filter: "brightness(0%)",
    ":hover": {
      // opacity: 0.5,
      filter: "none",
      cursor: "pointer",
      transform: `scale(${1.1 * scale})`,
    },
    [singleColumnMediaQuery]: {
      margin: `10px`,
    },
  })

const listStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  padding: 0,
  listStyleType: "none",
  margin: "1rem 0",
  [singleColumnMediaQuery]: {
    justifyContent: `center`,
    width: `auto`,
  },
})

const Icon = ({ icon, url, scale=1.0 }) => (
  <a className="no-style" rel="noopener noreferrer" target="__blank" href={url}>
    <img src={icon} alt="" {...iconStyles(scale)} />
  </a>
)

class MailIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reveal: false,
      mail: this.props.mail,
      icon: this.props.icon,
      scale: 1.0,
    }
  }

  decodeMail = (encodedMail) => {
      let decoded = ""
      for(let i = 0; i < this.state.mail.length; i++){
          decoded += String.fromCharCode(this.state.mail.charCodeAt(i) ^ 33)
      }
      return decoded
  }

  onReveal = () => {
      this.setState({ reveal: true })
  }

  render = () => {
    return (
      <a className="no-style" href={this.state.reveal ? "mailto:" + this.decodeMail() : "#"} onClick={this.onReveal}>
        <img src={this.state.icon} alt="" {...iconStyles(this.state.scale)} />
      </a>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  scale: PropTypes.number,
}

export default class SocialBar extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          github: PropTypes.string,
          linkedIn: PropTypes.string,
          email: PropTypes.string,
          telegram: PropTypes.string,
          twitter: PropTypes.string,
        }),
      }),
    }).isRequired,
  }
  render() {
    const { data } = this.props
    return (
      <ul {...listStyle}>
        <li>
          <Icon
            url={`//github.com/${data.site.siteMetadata.github}`}
            icon={GitHubIcon}
          />
        </li>
        <li>
          <Icon
            url={`//linkedin.com/in/${data.site.siteMetadata.linkedIn}`}
            icon={LinkedInIcon}
          />
        </li>
        <li>
          <MailIcon
            mail={`${data.site.siteMetadata.email}`}
            icon={EmailIcon}
          />
        </li>
        <li>
          <Icon
            url={`//t.me/${data.site.siteMetadata.telegram}`}
            icon={TelegramIcon}
          />
        </li>
        <li>
          <Icon
            url={`//twitter.com/${data.site.siteMetadata.twitter}`}
            icon={TwitterIcon}
          />
        </li>
      </ul>
    )
  }
}

export const SocialBarQuery = graphql`
  fragment SocialMediaFragment on Query {
    site {
      siteMetadata {
        github
        linkedIn
        email
        telegram
        twitter
      }
    }
  }
`
