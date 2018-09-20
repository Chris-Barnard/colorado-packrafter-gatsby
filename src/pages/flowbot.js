import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Flowbot</h1>
      <p>Flowbot was designed so that I could stop checking AWW whitewater to see when things started flowing better.. Less High, write more --- verbage. yay</p>
      <form
        name="flowbot"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="field-for-bots"
        action="#"
      >
        <input name="field-for-bots" type="hidden" />
        <p>
          <label>AWW Section URL: <input name="url" placeholder="https://www.americanwhitewater.org/content/River/detail/id/423" type="text" /></label>
        </p>
        <p>
          <label>Target Flow: <input name="target" placeholder="350" type="text" /></label>
        </p>
        <p>
          <label>Type of target: <select name="type">
            <option value="over">Over</option>
            <option value="under">Under</option>
          </select></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}