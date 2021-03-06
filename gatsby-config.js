module.exports = {
  siteMetadata: {
    title: `Aitor Alonso`,
    description: `¡Hello! I'm Aitor Alonso, and I'm currently studying a Master's Degree in Computer Science and Engineering at Universidad Carlos III de Madrid.`,
    author: `Aitor Alonso`,
    siteUrl: `https://aalonso.eu/`,
    github: `tairosonloa`,
    linkedIn: `aitoralonsonunez`,
    email: `@HUNS@MNORNOTOD[aFL@HMBNL`,
    telegram: `tairosonloa`,
    twitter: `tairosonloa`,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
