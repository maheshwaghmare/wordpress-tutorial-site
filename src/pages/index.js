import React from "react"
import { Link, graphql  } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ( {data}) => {
  console.log( data )
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      {data.allWpPost.nodes.map((node) => (
          <div className="article">
            <h2>{node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
