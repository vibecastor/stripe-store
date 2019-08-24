// Wrap the root element in the Mui ThemeProvider adn inject the theme at the root of the tree

import React from 'react'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#00b0ff',
    },
    text: {
      secondary: '#ffffff',
    },
  },
})

theme = responsiveFontSizes(theme)

const wrappedRootElement = ({ element }) => {
  return (
    <ThemeProvider theme="theme">
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}

export default wrappedRootElement
