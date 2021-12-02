import React, { useState, useEffect } from 'react'
import Web3 from 'web3/dist/web3.min.js'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import { translateMessageId } from '../utils/translations'

const StyledTokenData = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem 2rem;

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
    `}
`

const NumberWrapper = styled.div`
    flex-basis: auto;
    flex-grow: 1;

    & > h2, & > p {
        text-align: center
    }

    & > h2 {
        margin: 0 0 0.25rem;
        line-height: 4rem;
    }

    & > p {
        margin: 0;
        color: ${({theme}) => theme.text2};
    }

    ${({theme}) => theme.media.small`
        & > h2 {
            font-size: 2rem;
        }

        & > p {
            font-size: 1rem;
        }
    `}
`

async function getTokenData() {
  const web3 = new Web3('https://bsc-dataseed1.binance.org:443')

  const WBNB_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  const WBNB_BUSD_ADDRESS = '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16'
  const WBNB_LDOGE_ADDRESS = '0xb66e2ebc4d6ce4f07760f26df6e67406d0ef8090'
  const BUSD_ADDRESS = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
  const LDOGE_ADDRESS = '0xc32c50fa1854d0c8df9032e5887a57aa84783e8a'
  const burnAddress = '0x000000000000000000000000000000000000dead'

  // The minimum ABI to get ERC20 Token balance
  const minABI = [
    // balanceOf
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];

  const WBNB_CONTRACT = new web3.eth.Contract(minABI, WBNB_ADDRESS)
  const BUSD_CONTRACT = new web3.eth.Contract(minABI, BUSD_ADDRESS)
  const LDOGE_CONTRACT = new web3.eth.Contract(minABI, LDOGE_ADDRESS)

  const WbnbBalanceInLdogeWbnb = await WBNB_CONTRACT.methods.balanceOf(WBNB_LDOGE_ADDRESS).call()
  const LdogeBalanceInLdogeWbnb = await LDOGE_CONTRACT.methods.balanceOf(WBNB_LDOGE_ADDRESS).call()
  const BusdBalanceInBusdWbnb = await BUSD_CONTRACT.methods.balanceOf(WBNB_BUSD_ADDRESS).call()
  const WbnbBalanceInBusdWbnb = await WBNB_CONTRACT.methods.balanceOf(WBNB_BUSD_ADDRESS).call()
  const LdogeDeadBalance = await LDOGE_CONTRACT.methods.balanceOf(burnAddress).call()

  const WbnbPrice = BusdBalanceInBusdWbnb / WbnbBalanceInBusdWbnb
  const LdogePrice = WbnbBalanceInLdogeWbnb / LdogeBalanceInLdogeWbnb * WbnbPrice

  return {
    liquidity: WbnbPrice * WbnbBalanceInLdogeWbnb / 10**18 * 2,
    mcap: (100_000_000_000 - LdogeDeadBalance / 10**18) * LdogePrice
  }
}

const TokenData = () => {
    const intl = useIntl()
    const [stats, setStats] = useState({})
    const [liquidity, setLiquidity] = useState(0)
    const [mcap, setMcap] = useState(0)
    const tokenData = getTokenData()

    useEffect(() => {
        fetch('https://g4hh19ery9.execute-api.eu-west-1.amazonaws.com/default/get_stats?name=lambodoge')
            .then(res => res.json())
            .then((data) => {
                setStats(data)
            })
            .catch(console.log)
    }, [])

    const formatter = new Intl.NumberFormat("en", {
        maximumFractionDigits: 0,
        style: "decimal",
        useGrouping: true,
    });

    tokenData.then((result) => {
      setLiquidity(result.liquidity)
      setMcap(result.mcap)
    })

    const data = [
        {
            name: translateMessageId('mcap', intl),
            value: `$${formatter.format(`${mcap}` || 0)}`
        }, {
            name: translateMessageId('holders', intl),
            value: formatter.format(stats.holders || 0)
        }, {
            name: translateMessageId('liquidity', intl),
            value: `$${formatter.format(`${liquidity}` || 0)}`
        }
    ]

    return (
        <StyledTokenData>
            {data.map((stat, index) =>
                <NumberWrapper
                    key={index}
                >
                    <h2>{stat.value}</h2>
                    <p>{stat.name}</p>
                </NumberWrapper>
            )}
        </StyledTokenData>
    )
}

export default TokenData
