import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
