import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts'
import Seo from '../components/seo'
import { PrimaryButton } from '../components/button'
import TokenData from '../components/tokenData'
import { RowCentered, Column } from '../components/flexbox'
import SectionTitle from '../components/sectionTitle'
import { BlurredCard, VoidCard } from '../components/cards'

import Logo from '../images/logo.inline.svg'
import StakeIcon from '../images/stake.inline.svg'
import SwapIcon from '../images/swap.inline.svg'
import TwitterIcon from '../images/twitter.inline.svg'
import TelegramIcon from '../images/telegram.inline.svg'
import RedditIcon from '../images/reddit.inline.svg'
import GithubIcon from '../images/github.inline.svg'
import Wireframe from '../images/wireframe.inline.svg'

const StyledSection = styled.section`
    max-width: 1312px;
    margin: 100px auto 0;
    padding: 0 4rem;

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
        margin-top: 4rem;
    `}
`

const HomeSection = styled(StyledSection)`
    display: flex;
    justify-content: space-between;
    margin-top: 144px;
    gap: 4rem;
    align-items: center;

    ${({theme}) => theme.media.large`
        text-align: center;
        margin-bottom: 10rem;
        flex-direction: column;
    `}

    ${({theme}) => theme.media.medium`
        margin: 6rem 0;
    `}

    ${({theme}) => theme.media.small`
        margin: 4rem 0;
    `}

    ${({theme}) => theme.media.extraSmall`
        margin-top: 2rem;
    `}
`

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.25rem;
    margin: 0;

    ${({theme}) => theme.media.small`
        font-size: 3rem;
        text-align: left;
    `}
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${({theme}) => theme.text2};
    margin: 2rem 0 0;

    ${({theme}) => theme.media.small`
        font-size: 1rem;
        text-align: left;
    `}
`

const SocialLinksWrapper = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;

    & svg {
        width: 1.5rem;
        fill: ${({theme}) => theme.text1};
    }
`

const LamboIllustration = styled(Img)`
    max-width: 582px;
    width: 100%;
    flex-shrink: 0;
`

const TokenDataSection = styled(StyledSection)`
    ${({theme}) => theme.media.small`
        margin: 4rem 0;
    `}
`

const IndexPage = (props) => {
    const data = useStaticQuery(graphql`
        {
            lamboIllustration: file(relativePath: { eq: "lambo.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, factoryIllustration: file(relativePath: { eq: "factory.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, whitepaperIllustration: file(relativePath: { eq: "whitepaper.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Seo
                title="Home"
                path={props.location.pathname}
                description="The new generation of automatic yield tokens"
            />
            <HomeSection>
                <LamboIllustration
                    imgStyle={{ objectFit: 'contain' }}
                    width='582px'
                    fluid={data.lamboIllustration.childImageSharp.fluid}
                />
                <div>
                    <Title>SWAP &nbsp;|&nbsp; STAKE PROVIDE &nbsp;|&nbsp; EARN</Title>
                    <Subtitle>
                        The path between real DeFi innovations, good user experience and aggresive marketing.
                    </Subtitle>
                    <SocialLinksWrapper>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href='https://t.me/LamboDogeEN'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <TelegramIcon />
                        </a>
                        <a
                            href='https://reddit.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <RedditIcon />
                        </a>
                        <a
                            href='https://github.com/lamboDoge'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <GithubIcon />
                        </a>
                    </SocialLinksWrapper>
                </div>
            </HomeSection>
            <TokenDataSection>
                <TokenData />
            </TokenDataSection>
            <TokenSection />
            <DefiSection />
        </Layout>
    )
}

const WireframeWrapper = styled.div`
    position: relative;
    padding: 0 24px 0 48px;

    & > ${BlurredCard} {
        position: absolute;

        & > p {
            margin: 0;
            font-family: 'Roboto Mono';
            line-height: 26px;
        }

        & > p > span {
            font-family: Inter;
            font-size: 16px;
            font-weight: 600;
        }
    }
`

const StyledWireframe = styled(Wireframe)`
    height: 360px;
    flex-shrink: 0;
`

const TokenSection = () => {
    return (
        <StyledSection>
            <SectionTitle
                link='https://bscscan.com/address/0xc32c50fa1854d0c8df9032e5887a57aa84783e8a'
                linkName='VIEW ON BSCSCAN'
            >
                TOKEN
            </SectionTitle>
            <RowCentered gap="4rem" >
                <div>
                    <h3>No tax on transfer</h3>
                    <p>
                        LamboDoge doens’t take a tax on each transaction but on each buy or sell,
                        which lets you manage and use your tokens in a more user friendly way,
                        and unlock a lot of new scaling possibilities.
                    </p>
                </div>
                <WireframeWrapper>
                    <StyledWireframe />
                    <BlurredCard style={{ right: '0', top: '40px' }}  >
                        <p>
                            <span>Tax on buy or sell</span><br/>
                            1% to reward holders<br/>
                            1% goes to liquidity<br/>
                            2% for marketing
                        </p>
                    </BlurredCard>
                    <BlurredCard style={{ left: '0', bottom: '48px' }} >
                        <p>
                            <span>Max supply</span><br/>
                            100,000,000,000
                        </p>
                    </BlurredCard>
                </WireframeWrapper>
            </RowCentered>
        </StyledSection>
    )
}

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
`

const IconCardWrapper = styled(RowCentered)`
    height: 240px;
    justify-content: space-around;
`

const CardText = styled.p`
    margin: 0;
`

const DefiSection = () => {
    return (
        <StyledSection>
            <SectionTitle
                link='https://app.lambodoge.org'
                linkName='LAUNCH THE APP'
            >
                DEFI
            </SectionTitle>
            <CardsWrapper>
                <VoidCard>
                    <IconCardWrapper>
                        <SwapIcon/>
                    </IconCardWrapper>
                    <CardText>
                        Swap any BEP-20 tokens with in the most user friendly way
                    </CardText>
                </VoidCard>
                <VoidCard>
                    <IconCardWrapper>
                        <StakeIcon/>
                    </IconCardWrapper>
                    <CardText>
                        Stake your tokens and mine liquidity through multiple pools with highly rewarding APYs
                    </CardText>
                </VoidCard>
            </CardsWrapper>
        </StyledSection>
    )
}

export default IndexPage
