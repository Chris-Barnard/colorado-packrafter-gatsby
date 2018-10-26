import React from 'react'
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"

const Image = ({ src, alt, caption }) => {

  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid black;
      margin-bottom: ${rhythm(3/4)};
    `}>
      <div>
        <img src={src} alt={alt} className={css`
          margin-bottom: 0;
        `} />
      </div>
      <div className={css`
        align-self: center;
        font-size: ${rhythm(1/2)};
        margin: ${rhythm(1/4)};
      `}>
        {caption}
      </div>
    </div>
  )
}

export default Image