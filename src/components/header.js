import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { AppBar, Typography, Box } from '@material-ui/core'

const Header = ({ siteTitle }) => (
  <AppBar position="static">
    <div>
      <Box ml={2} p={1}>
        <Typography component="h6" variant="h6">
          {siteTitle}
        </Typography>
      </Box>
    </div>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
