import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import { RadialCard } from '../components/utils'

import '../styles/layout.css'
import '../styles/fonts.css'

const Layout = ({children}) => {
    return (
        <>
            <RadialCard/>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
