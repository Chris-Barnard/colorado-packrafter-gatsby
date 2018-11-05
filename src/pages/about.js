import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import Layout from "../components/layout"
import Image from "../components/image"

export default ({ data }) => {
  const headerStyle = css`
    border-bottom: 1px solid;
  `
  return (
    <Layout>
      <h1
        className={headerStyle}
      >About Me</h1>
      <p>
        My name is Chris Barnard.  I live in Denver and love to packraft all
        around Colorado, and the surrounding areas.
      </p>
      <Image
        src={data.site.siteMetadata.aboutImage}
        alt="Myself paddling on the Green River"
        caption="Green River - Photo: Adrian Boloveschi"
      />
      <p>
        This is a blog about my experiences packrafting around Colorado.  I hope
        to provide both some tools, and some inspiration for people to get out
        there and enjoy packrafting on some of this amazing whitewater that we
        have in Colorado and the surrounding areas.
      </p>
      <p>
        I also hope to try to help people avoid some of the same mistakes that I
        have made along the way.  I want to promote a safe paddling culture
        amongst packrafters here in Colorado.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        aboutImage
      }
    }
  }
`
