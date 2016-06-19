import React, { Component, PropTypes } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class App extends Component {
  render() {

    const { title, children } = this.props

    if (typeof document === 'undefined') {
      return (
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{ title }</title>
            <link href="/styles.css" rel="stylesheet" />
          </head>
          <body>
            <div id="app">
              <Header />
                <main role="main">
                  { children }
                </main>
              <Footer />
            </div>
            <script src="/app.js"></script>
          </body>
        </html>
      )
    }

    return (
      <div>
        <Header />
          <main role="main">
            { children }
          </main>
        <Footer />
      </div>
    )
  }
}