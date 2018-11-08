import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPinterestSquare, faInstagram, } from '@fortawesome/free-brands-svg-icons'

const Feature = () => (
  <section>
  <StaticQuery
    query={graphql`
      query ServiceQuery {
        vapeImage: file(relativePath: {eq: "images/vape.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data =>
        <>
          <div className="row">
            <div className="col-lg-6">
              <h2>Visit Us</h2>
              <address style={{lineHeight:"0.3"}}>
                <p ><strong>West Los Angeles</strong></p>
                <p>11725 Pico Blvd, Los Angeles, CA 90064</p>
                <p>(424) 293-0212</p>
              </address>
              <hr/>
              <address style={{lineHeight:"0.3"}}>
                <p><strong>Redondo Beach</strong></p>
                <p>11725 Pico Blvd, Los Angeles, CA 90064</p>
                <p>(424) 293-0212</p>
              </address>
              <div className="mx-auto" style={{width: 200}}>
                <FontAwesomeIcon icon={faEnvelope} className="fa-2x m-2" />
                <FontAwesomeIcon icon={faFacebook} className="fa-2x m-2"/>
                <FontAwesomeIcon icon={faPinterestSquare} className="fa-2x m-2"/>
                <FontAwesomeIcon icon={faInstagram} className="fa-2x m-2"/>
              </div>
            </div>
            <div className="col-lg-6">
              <Img className="img-fluid rounded" fluid={data.vapeImage.childImageSharp.fluid}/>
            </div>
          </div>
          <hr/>
        </>
      }
    />
  </section>
)

export default Feature
