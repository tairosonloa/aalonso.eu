import React from "react"
import { css } from "glamor"

const styles = css({
  margin: `0.5rem 0.8rem`,
  display: `inline-block`,
  textAlign: `center`,
  listStyle: `none`,
})

export default class SkillsContent extends React.Component {
  constructor(props) {
    super(props);
    this.icon = props.name;
    this.size = props.size;
    this.hexColor = props.color
    this.description = props.description
  }
  render() {
    return (
      <li {...styles}>
        <img src={"https://icongr.am/devicon/"+this.icon+".svg?size="+this.size+"&color="+this.hexColor} alt=""/>
        <div>{this.description}</div>
      </li>
    )
  }
}