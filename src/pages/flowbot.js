import React from "react"
// import { graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

class Flowbot extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formData : {
        url : '',
        type : 'OVER',
        target : '',
        email : '',
      },
      formSubmitting : false,
      formError : false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const url = 'http://18.219.68.63:5000/add-tracker/'
    // console.log(event)

    event.preventDefault()
    this.setState({ ...this.state, formSubmitting : true, formSuccess : false, formError : false })

    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state.formData)
    })
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          this.setState({ ...this.state, formSubmitting : false, formError : true })
          throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .then(items => {
        console.log(items)
        this.setState({ ...this.state, formSubmitting : false, formSuccess : true, formData : {
          url : '',
          type : 'OVER',
          target : '',
          email : '',
        }})
      })
  }

  render() {
    // const data = this.props
    console.log(this.state)

    const flex = css`
      flex: 1 1 auto;
      width: 100%;
    `

    const fullWidth = css`
      width: 100%;
      margin-bottom: ${rhythm(1/2)}
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

    const submittedNotification = css`
      display: block;
      border: solid 1px darkgrey;
      margin: 0 auto;
      padding: ${rhythm(1.5)};
      width: 80%;
      text-align: center;
      margin-bottom: ${rhythm(1)};
    `

    const successNotification = css`
      display: block;
      border: solid 1px green;
      margin: 0 auto;
      padding: ${rhythm(1.5)};
      width: 80%;
      text-align: center;
      margin-bottom: ${rhythm(1)};
    `

    const errorNotification = css`
      display: block;
      border: solid 1px red;
      margin: 0 auto;
      padding: ${rhythm(1.5)};
      width: 80%;
      text-align: center;
      margin-bottom: ${rhythm(1)};
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
          Flowbot was designed so that I could spend less time refreshing AWW, but still stay
          on top of when flows hit certain levels.
        </p>
        <p>
          It is a really simple tool.  To use it, you just browse to a section of
          river you want to paddle on <a target="_&" href="https://americanwhitewater.org/content/River/state-summary/state/CO/">American Whitewater's</a> website.
          Then paste the url into the form below, along with your target flow you
          want to be notified when it breaches.  Use whatever flow units the
          gauge on the page you've linked uses.  Enter in your email address,
          along with whether you want to be notified when the flow is above or
          below your target number, and then <strong>flowbot</strong> will keep
          an eye on it and contact you when your condition is met!
        </p>
        { this.state.formSubmitting && 
          <div className={submittedNotification}>Submitted: Handing the request off to Flowbot</div>
        }
        { this.state.formSuccess && 
          <div className={successNotification}>Success: Flowbot is on it!</div>
        }
        { this.state.formError && 
          <div className={errorNotification}>Error: There was an error delivering the request</div>
        }
        <form
          name="flowbot"
          method="post"
          data-netlify="false"
          data-netlify-honeypot="field-for-bots"
          className={css`
            display: flex;
            flex-direction: column;
          `}
          onSubmit={this.handleSubmit}
        >
          <input name="field-for-bots" type="hidden" />
          <div className={flex}>
            <label>AWW Section URL: <input className={fullWidth} 
                                          name="url"
                                          placeholder="https://www.americanwhitewater.org/content/River/detail/id/423/"
                                          type="text"
                                          value={this.state.formData.url}
                                          onChange={event => this.setState({...this.state, formData : { ...this.state.formData, url : event.target.value }})}
                                    /></label>
          </div>
          <div className={flex}>
            <div className={flexCols}>
              <div className={overUnder}>
                <label>Type of target: <select className={fullWidth}
                                              name="type"
                                              value={this.state.formData.type}
                                          onChange={event => this.setState({...this.state, formData : { ...this.state.formData, type : event.target.value }})}
                                        >
                  <option value="over">Over</option>
                  <option value="under">Under</option>
                </select></label>
              </div>
              <div className={flowInput}>
                <label>Target Flow: <input className={fullWidth}
                                          name="target"
                                          placeholder="350"
                                          type="text"
                                          value={this.state.formData.target}
                                          onChange={event => this.setState({...this.state, formData : { ...this.state.formData, target : event.target.value }})}
                                    /></label>
              </div>
            </div>
          </div>
          <div className={flex}>
            <label>Email Address: <input className={fullWidth}
                                        name="email"
                                        placeholder="barnard.chris@gmail.com"
                                        type="email"
                                        value={this.state.formData.email}
                                        onChange={event => this.setState({...this.state, formData : { ...this.state.formData, email: event.target.value }})}
                                  /></label>
          </div>
          <div className={flex}>
            <button type="submit">Send</button>
          </div>
        </form>
      </Layout>
    )
  }
}

export default Flowbot