import React from "react"
import Layout from "../components/layout"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"
import './iframe.css'

export default ({ data }) => {
  const post = data.markdownRemark
  const displayDate = post.frontmatter.difficulty ? "Class " + post.frontmatter.difficulty : post.frontmatter.date
  const postHeader = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-bottom: ${rhythm(1)};
  `
  const postTitle = css`
    display: inline-block;
    margin-bottom: 0;
  `
  const postDate = css`
    display: inline-block;
    padding-top: ${rhythm(1/3)};
    margin-bottom: 0;
  `
  const disclaimer = css `
    font-size: ${rhythm(.45)};
    border: 1px solid darkgrey;
    border-radius: 5px;
    padding: ${rhythm(1)};
    // magin-top: ${rhythm(1/2)};
  `
  return (
    <Layout>
      <div className={postHeader}>
        <h1 className={postTitle}>{post.frontmatter.title}</h1>
        <h3 className={postDate}>{displayDate}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className={disclaimer}>
        I am only relaying my experiences and in no way am I giving you advice on what is safe.
        Every person ultimately must be responsible for themselves.  Do your own research and be
        honest with yourself about your abilities.
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
        difficulty
      }
    }
  }
`