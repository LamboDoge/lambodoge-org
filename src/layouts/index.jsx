import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import { RadialCard } from '../components/utils'
import ThemeProvider from '../styles/theme'

import '../styles/layout.css'
import '../styles/fonts.css'

const Layout = ({children}) => {
    return (
        <ThemeProvider>
            <RadialCard/>
            <Header/>
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
