import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Welcome</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}