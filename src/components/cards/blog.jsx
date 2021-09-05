import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const StyledBlogCard = styled.div`
    width: 100%;
`

const Banner = styled(Image)`
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.text2};
    height: 538px;
    max-width: 1024px;
    width: 100%;

    &:hover {
        border-color: ${({theme}) => theme.text1};
    }

    ${({theme}) => theme.media.medium`
        height: 420px;
    `}

    ${({theme}) => theme.media.small`
        height: 320px;
    `}

    ${({theme}) => theme.media.extraSmall`
        height: 220px;
    `}
`

const BlogTitle = styled(Link)`
    display: block;
    font-size: 42px;
    font-weight: 400;
    margin: 1rem 0 0;

    ${({theme}) => theme.media.small`
        font-size: 32px;
        line-height: 40px;
    `}
`

const DataField = styled.p`
    color: ${({theme}) => theme.text2};
    margin: 0;
    font-size: 1rem;
`

const BlogCard = ({data, large}) => {
    return (
        <StyledBlogCard>
            <Link to={data.fields.slug} style={{ width: '100%' }} >
                <Banner fluid={data.frontmatter.banner.childImageSharp.fluid} />
            </Link>
            <BlogTitle to={data.fields.slug} >{data.frontmatter.title}</BlogTitle>
            <DataField>{data.frontmatter.date}</DataField>
        </StyledBlogCard>
    )
}

export default BlogCard
