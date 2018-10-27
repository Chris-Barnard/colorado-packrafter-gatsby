import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Image from "../components/image"

export default ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark
  const { titleImage } = data.site.siteMetadata

  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Packrafting around Colorado
        </h1>
        <Image src={titleImage} alt="I'm approaching the takeout of Waterton Canyon" caption="Finishing up Waterton Canyon" />
        <h4>{totalCount} Posts</h4>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                className={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  className={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.frontmatter.excerpt ? node.frontmatter.excerpt : node.excerpt}</p>
            </Link>
          </div>
        ))}
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`