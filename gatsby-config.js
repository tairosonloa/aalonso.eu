module.exports = {
  siteMetadata: {
    title: `Full Stack Developer`,
    description: `Full stack developer and part-time studying a MSc in Computer Engineering`,
    author: `Aitor Alonso`,
    siteUrl: `https://aalonso.eu/`,
    social: {
      twitter: `tairosonloa`,
      facebook: ``,
      github: `tairosonloa`,
      linkedin: `aitoralonsonunez`,
      email: `aalonso@aalonso.eu` // TODO: Obfuscate
    },
    documents: {
      cv: `/documents/Aitor_Alonso_Nunez_CV.pdf`,
      tfg: `/documents/TFG_Aitor_Alonso_Nuñez.pdf`
    },
    menuLinks: [
      {
        name: `Blog`,
        link: `/`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Skills`,
        link: `/skills`,
      },
      {
        name: `Portfolio`,
        link: `/portfolio`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-153375682-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/blog`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/images/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
