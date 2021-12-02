import React from 'react'
import Layout from './src/components/layout'
import StyledThemeProvider from './src/styles/theme'

export const wrapRootElement = ({ element }) => <StyledThemeProvider>{element}</StyledThemeProvider>;

// Prevents <Layout/> from unmounting on page transitions
// https://www.gatsbyjs.com/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js")
  }
}
