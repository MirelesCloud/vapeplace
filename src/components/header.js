import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const Header = (props) => (
  <section>
    <StaticQuery
      query={graphql`
        query ImageQuery {
          smoke1: file(relativePath: {eq: "images/liquids.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          smoke2: file(relativePath: {eq: "images/CBDBanner.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          smoke3: file(relativePath: {eq: "images/smoke31.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={2000} dynamicHeight={true} showThumbs={false}>
          <div >
             <Img fluid={data.smoke1.childImageSharp.fluid} alt="header"/>
                 <div className="header-one">
                   <h1 className="display-3 background">all natural e-liquids</h1>
                 </div>
             <p className="legend">Alchemy</p>
          </div>
             <div>
                <Img fluid={data.smoke2.childImageSharp.fluid} alt="header 2"/>
                  <div className="header-two">
                    <h1 className="display-3 background">CBD Supplements</h1>
                  </div>
                <p className="legend" alt="image">CBD</p>
            </div>
            <div>
                <Img fluid={data.smoke3.childImageSharp.fluid} alt="header 3"/>
                  <div className="header-three">
                    <h1 className="display-3 background">electronic cigarettes</h1>
                  </div>
                <p className="legend" alt="image">vape</p>
            </div>
        </Carousel>
        </>
      )}
      />
  </section>

)

export default Header
