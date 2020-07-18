import React from "react"
import { Link, graphql  } from "gatsby"

import contentParser from 'gatsby-wpgraphql-inline-images';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const wordPressUrl = 'http://localhost/dev.test/';
const uploadsUrl = 'http://localhost/dev.test/wp-content/uploads/';

const IndexPage = ( {data}) => {
  console.log( data )
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      
      <h4>All Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div className="article" key={node.slug}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div>{contentParser( node.content, { wordPressUrl, uploadsUrl })}</div>
        </div>
      ))}

      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
    query {
        allWpPost(sort: { fields: [date] }) {
            nodes {
                title
                excerpt
                slug
            }
        }
    }
`

export default IndexPage
