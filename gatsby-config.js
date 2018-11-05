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
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}