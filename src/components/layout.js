import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const mainPage = css`
        margin: 0 auto;
        max-width: 1050px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `
      const menuNav = css`
        width: 100%;
        background: rgb(18,18,18);
        padding: ${rhythm(3/4)};
      `
      const menuList = css`
        list-style: none;
        margin: 0;
        display: flex;
        justify-content: space-between;
      `
      const menuTitle = css`
        position: relative;
        // width: 100%;
        flex-basis: 100%;
        flex-grow: 1;
        margin: 0;
        display: inline-block;
      `
      const menuOther = css`
        display: inline-block;
        margin: 0;
        margin-left: ${rhythm(1/2)};
        color: lightgrey;
      `
      const mainViewport = css`
        margin-top: ${rhythm(1)};
      `
      const link = css`
        color: lightgrey;
        text-decoration: none;
      `
      return (
        <div className={mainPage}>
          <nav className={menuNav} >
            <ul className={menuList} >
              <li className={menuTitle}>
                <Link className={link} to={`/`}>{data.site.siteMetadata.title}</Link>
              </li>
              <li className={menuOther}>
                <Link className={link} to={`/flowbot/`}>Flowbot</Link>
              </li>
              <li className={menuOther}>
                <Link className={link} to={`/about/`}>About</Link>
              </li>
            </ul>
          </nav>
          <div className={mainViewport}>
            {children}
          </div>
        </div>
      )}
    }
  />
)
