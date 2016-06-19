import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-sm-push-6 col-sm-6 footer-navigation">
                    <Link to="/">Home</Link> | 
                    <Link to="/about">About</Link>
                  </div>
                  <div className="col-sm-pull-6 col-sm-6">
                    <p>Copyright &copy; 2016</p>
                  </div>
                </div>
              </div>
            </footer>
        )
    }
}