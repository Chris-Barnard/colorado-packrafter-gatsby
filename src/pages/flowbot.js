import React from "react"
// import { graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
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

  const overUnder = css`
    flex-basis: 50%;
    margin-right: ${rhythm(1/2)}
  `

  const flowInput = css`
    flex-basis: 50%;
    margin-left: ${rhythm(1/2)}
  `

  const flexCols = css`
    display: flex;
    flex-direction: row;
  `

  return (
    <Layout>
      <h1
          className={css`
            border-bottom: 1px solid;
          `}
      >
        Flowbot</h1>
      <p>
        Flowbot was designed so that I could stop checking AWW to see when
        things started flowing better..
      </p>
      <p>
        It is a really simple tool.  To use it, you just browse to a section of
        river you want to paddle on <a href="https://americanwhitewater.org/content/River/state-summary/state/CO/">American Whitewater's</a> website.
        Then paste the url into the form below, along with your target flow you
        want to be notified when it breaches.  Use whatever flow units the
        gauge on the page you've linked uses.  Enter in your email address,
        along with whether you want to be notified when the flow is above or
        below your target number, and then <strong>flowbot</strong> will keep
        an eye on it and contact you when your condition is met!
      </p>
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
          <div className={flexCols}>
            <div className={overUnder}>
              <label>Type of target: <select className={fullWidth} name="type">
                <option value="over">Over</option>
                <option value="under">Under</option>
              </select></label>
            </div>
            <div className={flowInput}>
              <label>Target Flow: <input className={fullWidth} name="target" placeholder="350" type="text" /></label>
            </div>
          </div>
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