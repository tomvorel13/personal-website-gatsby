module.exports = {
  siteMetadata: {
    title: `Tom Vorel 2017`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dosis`,
          `Open Sans\:400,800`,
          `Saira Semi Condensed\:400,600,700`
        ]
      }
    }
  ]
};
