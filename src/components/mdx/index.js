import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import TaxSimulator from './taxSimulator'

const components = {
  TaxSimulator
}

export default function MDX({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
