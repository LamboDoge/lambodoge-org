import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.text1};
    padding: 1rem 2rem;
`

export const BlurredCard = styled(Card)`
    backdrop-filter: blur(12px);
`

export const VoidCard = styled(Card)`
    background: radial-gradient(151.46% 48.57% at 50% 48.57%, rgba(76, 0, 239, 0.2) 0%, rgba(76, 0, 239, 0) 100%);
`
