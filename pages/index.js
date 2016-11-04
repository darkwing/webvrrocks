import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "robots", "content": "none"},
          ]}
        />
        <h1>WebVR Rocks</h1>
        <p>Coming soon!</p>
      </div>
    )
  }
}
