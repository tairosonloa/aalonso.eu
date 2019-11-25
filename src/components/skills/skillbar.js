import React from "react"
import styles from "./skillbar.module.css"


export default class SkillBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.name = props.name;
    this.percent = props.percent;
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ width: this.percent });
    });
  }

  render() {
    return (
      <div className={styles.bar1}>
        <div className={styles.title}>{this.name}</div>
        <div className={styles.bar} data-width={this.percent}>
          <div className={styles.barinner} style={{ width: this.state.width}}></div>
          <div className={styles.barpercent}>{this.percent}</div>
        </div>
      </div>
    )
  }
}