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
        <h3>{`Aitor Alonso`}</h3>
        <p>
          I'm not afraid of making errors, because I'm human, and we learn from our mistakes.
        </p>
      </div>
    )
  }
}
