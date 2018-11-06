module.exports = {
  siteMetadata: {
    title: 'Colorado Packrafter',
    titleImage: '../waterton-1050.jpg',
    aboutImage: '../flaming-gorge-1050.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins : [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1050,
            }
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
      // resolve: `gatsby-source-filesystem`,
      // options: {
      //   name: `images`,
      //   path: `${__dirname}/src/images/`,
      // },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}