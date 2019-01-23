const fs = require("fs")
const dotenv = require('dotenv')
let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
  siteMetadata: {
    title: `Vapeplace CBD`,
    titleTemplate: `%s · Vapeplace CBD`,
    url: `https://www.vapeplacecbd.com`,
    description: `Vaping juices, e-cigarettes and CBD`,
    image: `/images/liquids.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MirelesCloud Gatsby Starter`,
        start_url: `/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
   resolve: `gatsby-source-filesystem`,
   options: {
     name: `images`,
     path: `${__dirname}/src/images/`,

   }
  },
  {
 resolve: `gatsby-source-filesystem`,
 options: {
   name: `gallery`,
   path: `${__dirname}/src/images/gallery`,

  }
 },
 {
   resolve: `gatsby-source-graphql`,
   options: {
     typeName: `YELP`,
     fieldName: `yelp`,
     url: `https://api.yelp.com/v3/graphql`,
     headers: {
       Authorization: `bearer ${process.env.API_KEY}`
     },
   }
 },
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128959830-1",
        head: true,
      },
    },

  ]
}
