import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../layouts"
import Seo from "../components/seo"
import BlogCard from '../components/cards/blog'
import Section, { SectionTitle } from '../components/section'
import { ColumnCentered } from '../components/flexbox'

const BlogSection = styled(Section)`
    max-width: 1024px;

    ${({theme}) => theme.media.large`
        margin-top: 4rem;
    `}

    ${({theme}) => theme.media.extraSmall`
        margin-top: 2rem;
    `}
`

const BlogCardsWrapper = styled(ColumnCentered)`
    gap: 100px;

    ${({theme}) => theme.media.small`
        gap: 64px;
    `}
`

export default function Blog() {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            banner {
                                childImageSharp {
                                    fluid(quality: 100, maxWidth: 1024) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMdx.edges

    return (
        <Layout>
            <Seo
                title="Blog"
            />
            <BlogSection>
                <SectionTitle>BLOG</SectionTitle>
                <BlogCardsWrapper>
                    {posts.map((post) => <BlogCard data={post.node} large />)}
                </BlogCardsWrapper>
            </BlogSection>
        </Layout>
    )
}
