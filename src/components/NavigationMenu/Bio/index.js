import { Link } from "gatsby"
import { css } from "glamor"
import React from "react"
import profilePic from "./me.png"

const imageStyles = css({
  width: `6rem`,
  marginBottom: `0`,
  borderRadius: `50px`,
})

export default class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt={`author Aitor Alonso`}
          {...imageStyles}
        />
        <h2>
          <Link to="/">aalonso.eu</Link>
        </h2>
        <h3>{`Aitor Alonso`}</h3>
        <p>
          Full stack developer and experienced Linux system administrator
        </p>
      </div>
    )
  }
}
