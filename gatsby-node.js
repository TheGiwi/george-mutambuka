const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const getPageQuery = () => `
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/g" } }) {
      edges {
        node {
          fields {
            slug
          }
          html
        }
      }
    }
  }
  `

const createNewPage = (template, basePath, createPage) => ({ node }) => {
  createPage({
    context: {
      slug: node.fields.slug,
    },
    component: path.resolve(template),
    path: path.join(basePath, node.fields.slug),
    slug: node.fields.slug,
  })
}

const createProject = (createPage) => {
  const template = 'src/templates/Project/index.js'
  const basePath = 'projects'
  return createNewPage(template, basePath, createPage)
}

const createProjectPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const query = getPageQuery()
  const result = await graphql(query)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(createProject(createPage))
}

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createProjectPages({ graphql, actions })

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/posts/g" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results
  const pages = result.data.allGhostPage.edges
  const posts = result.data.allMarkdownRemark.edges

  // Load templates
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)

  // Create pages
  pages.forEach(({ node }) => {
    // This part here defines, that our pages will use
    // a `/:slug/` permalink.
    node.url = `/${node.slug}/`

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    const { slug } = node.fields
    node.url = `/blog/${slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
      },
    })
  })

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: blogTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/blog`
      } else {
        return `/blog/page`
      }
    },
  })
}

// From https://www.gatsbyjs.org/tutorial/part-seven/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
