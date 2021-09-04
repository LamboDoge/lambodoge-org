const menu = require('./src/utils/menu');

require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `LamboDoge`,
        description: `The new generation of automatic yield tokens`,
        author: `@LamboDoge`,
        menulinks: menu,
        siteUrl: `https://lambodoge.org`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: process.env.AWS_S3_BUCKET || 'NOT_SPECIFIED',
                protocol: 'https',
                hostname: 'lambodoge.org',
                acl: null
            }
        },
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        `gatsby-background-image`,
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-twitter-cards`,
                        options: {
                            title: 'LamboDoge', // website title
                            separator: '|', // default
                            author: '@LamboDoge',
                            background: require.resolve('./static/images/twitter-card-bg.png'), // path to 1200x630px file or hex code, defaults to black (#000000)
                            fontColor: '#F7F7F7', // defaults to white (#ffffff)
                            fontStyle: 'sans-serif', // default
                            titleFontSize: 124, // default
                            fontFile: require.resolve('./static/fonts/Poppins-Medium.ttf') // will override fontStyle - path to custom TTF font
                        }
                    },
                ]
            }
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        }, {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        }, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `LamboDoge Website`,
                short_name: `lamboDoge`,
                start_url: `/`,
                background_color: `#E100BD`,
                theme_color: `#E100BD`,
                display: `minimal-ui`,
                icon: `src/images/lambodoge-icon.png`
            },
        },
    ],
};
