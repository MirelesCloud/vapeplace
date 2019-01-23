import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import '../css/main.css'
import '../css/contact.css'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Home from './template/home'
import Footer from '../components/footer'



const TemplateWrapper = ({data}) => (
  <div>
    <SEO/>
    <Home/>
    <Footer/>
  </div>
)

export default TemplateWrapper

export const pageQuery = graphql`
  query testQuery {
    imageHair: file(relativePath: {eq: "images/hair9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageGallery: allFile(filter: {absolutePath: {regex: "\/images/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
