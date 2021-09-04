import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './'
import Seo from '../components/seo'

export default function BlogPost({data, pageContext, path}) {
    const {node: post} = data.allMdx.edges.filter(post =>
        post.node.fields.slug === path
    )[0] ?? {node: undefined}

    if (!post) {
        return null
    }

    return (
        <Layout>
            <Seo
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($relativePath: String) {
        mdx(fields: { relativePath: { eq: $relativePath } }) {
            body
        }
        allMdx(
            filter: {fileAbsolutePath: {regex: "/blog/"}},
            sort: {order: DESC, fields: frontmatter___date}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        banner {
                            childImageSharp {
                                fluid(quality: 100, maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    headings {
                        value
                        depth
                    }
                }
            }
        }
    }
`
