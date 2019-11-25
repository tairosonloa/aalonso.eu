import React from "react"
import styles from "./devicon.module.css"


export default class SkillsContent extends React.Component {
  constructor(props) {
    super(props);
    this.description = props.description;
    this.path = props.path;
    this.extra = props.extra;
    this.viewBox = (props.viewBox)? props.viewBox : "0 0 128 128";
    this.fillRule = (props.fillRule)? props.fillRule : "nonzero";
    this.clipRule = (props.clipRule)? props.clipRule : "nonzero";
    this.color = (props.color)? props.color : "#263959";
  }
  render() {
    return (
      <li className={styles.devicon} key={this.description+"a"}>
        <svg viewBox={this.viewBox} width="2.66rem" key={this.description+"b"}>
          {this.extra}
          <path fill={this.color} fillRule={this.fillRule} clipRule={this.clipRule} d={this.path}  key={this.description+"c"}></path>
        </svg>
        <div key={this.description+"d"}>{this.description}</div>
      </li>
    )
  }
}