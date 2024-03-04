import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
  siteMetadata: {
    title: `Les bibliothèques / UdeM`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: join(__dirname, 'src', 'images')
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: join(__dirname, 'src', 'pages')
      },
      __key: 'pages'
    },
    // Add a collection called "posts" that looks
    // for files in content/posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: join(__dirname, 'content'),
      },
    },
  ]
}

export default config