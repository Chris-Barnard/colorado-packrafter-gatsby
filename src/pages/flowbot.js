import React from "react"
// import { graphql } from "gatsby"
import { css } from "react-emotion"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)

  const flex = css`
    flex: 1 1 auto;
    width: 100%;
  `

  const fullWidth = css`
    width: 100%;
  `

  return (
    <Layout>
      <h1
          className={css`
            border-bottom: 1px solid;
          `}
      >
        Flowbot</h1>
      <p>Flowbot was designed so that I could stop checking AWW whitewater to see when things started flowing better.. Less High, write more --- verbage. yay</p>
      <form
        name="flowbot"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="field-for-bots"
        action="#"
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <input name="field-for-bots" type="hidden" />
        <p className={flex}>
          <label>AWW Section URL: <input className={fullWidth} name="url" placeholder="https://www.americanwhitewater.org/content/River/detail/id/423" type="text" /></label>
        </p>
        <p className={flex}>
          <label>Target Flow: <input className={fullWidth} name="target" placeholder="350" type="text" /></label>
        </p>
        <p className={flex}>
          <label>Type of target: <select className={fullWidth} name="type">
            <option value="over">Over</option>
            <option value="under">Under</option>
          </select></label>
        </p>
        <p className={flex}>
          <label>Email Address: <input className={fullWidth} name="email" placeholder="chris@coloradopackrafter.com" type="email" /></label>
        </p>
        <p className={flex}>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}