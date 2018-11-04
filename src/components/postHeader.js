import React from 'react'
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const PostHeader = ({slug, excerpt, frontmatter }) => {

  const postLinkStyle = css`
    text-decoration: none;
    color: inherit;
  `
  const postHeaderStyle = css`
    margin-bottom: ${rhythm(1 / 4)};
  `
  const postDateStyle = css`
    color: #bbb;
  `
  return (
    <div>
      <Link
        to={slug}
        className={postLinkStyle}>
        <h3 className={postHeaderStyle} >
          {frontmatter.title}{" "}
          <span className={postDateStyle} > — {frontmatter.difficulty ? frontmatter.difficulty : frontmatter.date}
          </span>
        </h3>
        <p>{frontmatter.excerpt ? frontmatter.excerpt : excerpt}</p>
      </Link>
    </div>
  )
}


export default PostHeader