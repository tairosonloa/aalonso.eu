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
    // this.icon = props.name;
    // this.size = props.size;
    this.hexColor = props.color;
    this.description = props.description;
    this.path = props.path;
    this.extra = props.extra;
  }
  render() {
    return (
      <li {...styles}>
        <svg viewBox="0 0 128 128" width="2.66rem">
          {this.extra}
          <path fill={this.hexColor} d={this.path}></path>
        </svg>
        <div>{this.description}</div>
      </li>
    )
  }
}