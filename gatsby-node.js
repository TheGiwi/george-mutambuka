const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const getPageQuery = () => `
  {
    allMarkdownRemark {
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
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
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
  const tags = result.data.allGhostTag.edges
  const authors = result.data.allGhostAuthor.edges
  const pages = result.data.allGhostPage.edges
  const posts = result.data.allGhostPost.edges

  // Load templates
  const indexTemplate = path.resolve(`./src/templates/index.js`)
  const tagsTemplate = path.resolve(`./src/templates/tag.js`)
  const authorTemplate = path.resolve(`./src/templates/author.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0
    const numberOfPages = Math.ceil(totalPosts / postsPerPage)

    // This part here defines, that our tag pages will use
    // a `/tag/:slug/` permalink.
    node.url = `/tag/${node.slug}/`

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1
      const nextPageNumber =
        currentPage + 1 > numberOfPages ? null : currentPage + 1
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}page/${prevPageNumber}/`
        : null
      const nextPagePath = nextPageNumber
        ? `${node.url}page/${nextPageNumber}/`
        : null

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: tagsTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      })
    })
  })

  // Create author pages
  authors.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0
    const numberOfPages = Math.ceil(totalPosts / postsPerPage)

    // This part here defines, that our author pages will use
    // a `/author/:slug/` permalink.
    node.url = `/author/${node.slug}/`

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1
      const nextPageNumber =
        currentPage + 1 > numberOfPages ? null : currentPage + 1
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}page/${prevPageNumber}/`
        : null
      const nextPagePath = nextPageNumber
        ? `${node.url}page/${nextPageNumber}/`
        : null

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: authorTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      })
    })
  })

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
    node.url = `/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: indexTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/`
      } else {
        return `/page`
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
