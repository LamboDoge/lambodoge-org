import React from 'react'
import Layout from "./src/layouts"
import StyledThemeProvider from './src/styles/theme'

export const wrapRootElement = ({ element }) => <StyledThemeProvider>{element}</StyledThemeProvider>;

// Prevents <Layout/> from unmounting on page transitions
// https://www.gatsbyjs.com/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
