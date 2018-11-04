import React from "react"
import Layout from "../components/layout"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <div>
        <span>
          <h1 className={css`
            display: inline-block;
          `} >{post.frontmatter.title}</h1>
          <h3 className={css`
            float: right;
            padding-top: ${rhythm(1/3)}
          `} >{post.frontmatter.date}</h3>
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`