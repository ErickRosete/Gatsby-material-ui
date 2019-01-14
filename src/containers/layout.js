import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import Header from '../components/header'
import './layout.css'
import ButtonAppbar from '../components/button-appbar'
import TemporaryDrawer from '../components/temporary-drawer'

class Layout extends Component {
  state = {
    left: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
            <ButtonAppbar toggleDrawer={this.toggleDrawer} />
            <TemporaryDrawer
              toggleDrawer={this.toggleDrawer}
              left={this.state.left}
            />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {this.children}
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
