import React from 'react'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
    margin-bottom: 64px;

    & > h2 {
        font-weight: 800;
        margin: 0;
    }

    & > h2 > span {
        font-weight: 300;
    }

    & > a {
        font-family: Inter;
        font-size: 20px;
        font-weight: 500;
    }

    & > a:hover {
        text-decoration: underline;
    }
`

const SectionTitle = ({children, link = undefined, linkName = undefined}) => {
    return (
        <StyledSectionTitle>
            <h2>
                <span>LAMBODOGE</span>
                {' '}
                {children}
            </h2>
            {link && linkName &&
                <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                >
                    {linkName} →
                </a>
            }
        </StyledSectionTitle>
    )
}

export default SectionTitle
