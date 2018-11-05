import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import PostHeader from "../components/postHeader"

export default ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark

  const titleStyle = css`
    display: inline-block;
    border-bottom: 1px solid;
  `
  const subTitleStyle = css`
    border-bottom: 1px solid;
    margin-bottom: ${rhythm(1/2)};
    margin-top: ${rhythm(2)};
  `
  return (
    <Layout>
      <div>
        <h1 className={titleStyle}>Packrafting around Colorado</h1>
        <h4>{totalCount} Posts</h4>
        <h2 className={subTitleStyle} >General Updates</h2>
        {edges.map(({ node }) => {
          // ----------------------------------------------------------
          // General Posts
          // ----------------------------------------------------------
          const { fields, id, frontmatter, excerpt } = node
          const { slug, postType } = fields
          if (postType === 'posts') {
            return (
              <PostHeader
                key={id+"posts"}
                slug={slug}
                frontmatter={frontmatter}
                excerpt={excerpt}
              />
            )
          }
          return null
        })}

        <h2 className={subTitleStyle} >River Sections</h2>
        {edges.map(({ node }) => {
          // ----------------------------------------------------------
          // River Sections
          // ----------------------------------------------------------
          const { fields, id, frontmatter, excerpt } = node
          const { slug, postType } = fields
          if (postType === 'river-sections') {
            return (
              <PostHeader
                key={id+"posts"}
                slug={slug}
                frontmatter={frontmatter}
                excerpt={excerpt}
              />
            )
          }
          return null
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        titleImage
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
            tags
            difficulty
          }
          fields {
            slug
            postType
          }
          excerpt
        }
      }
    }
  }
`