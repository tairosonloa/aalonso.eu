import React from "react"
import { css } from "glamor"
import { Link } from "gatsby"
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
        <p style={{ marginBottom: "0.5rem", textAlign: "center" }}>
          {`Aitor Alonso`}
        </p>
      </div>
    )
  }
}
