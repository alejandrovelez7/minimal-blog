require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Let's Talk`,
    siteTitleAlt: `¡Hola Mundo!`,
    author: 'Alejandro Vélez-Calderón',
    siteImage: '/tomorrow.jpeg',
    siteDescription: `Blog simplístico para la discusión de pensamientos.`,
    siteUrl: `https://pelau.app`,
    siteLanguage: 'en',
    siteHeadline: '¡Hola Mundo!'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Nosotros`,
            slug: `/sobre-nosotros`,
          },
        ],
        externalLinks: [
          {
            name: `Instagram`,
            url: `https://www.instagram.com/alejandrovelez7/`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Blog simplístico para la discusión de pensamientos.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/garita.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
