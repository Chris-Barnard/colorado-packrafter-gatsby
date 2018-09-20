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
        name="flowbot-subscribe"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="url" placeholder="url" type="text" /> <br />
        <input name="target" placeholder="target flow" type="text" /> <br />
        <input name="overUnder" type="radio" value="over" checked /> Over <br />
        <input name="overUnder" type="radio" value="under" /> Under <br />
        <button>Send</button>
      </form>
    </Layout>
  )
}