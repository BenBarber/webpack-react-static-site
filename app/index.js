import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { Router, match, RouterContext, createMemoryHistory, browserHistory } from 'react-router'
import routes from './routes'

// Client render
if (typeof document !== 'undefined') {
  render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{routes}</Router>, 
    document.getElementById('app')
  );
}

// Exported static site
export default (locals, callback) => {
  const props = {}
  const location = locals.path
  const history = createMemoryHistory();

  return match({ routes, location, history }, (err, redirect, props) => {
    const html = renderToString(<RouterContext {...props} />)
    callback(null, '<!DOCTYPE html>' + html);
  });
};
