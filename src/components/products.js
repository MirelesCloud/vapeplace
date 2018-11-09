import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Products = (props) => (
  <section>
    <StaticQuery
      query={graphql`
        query ProductQuery {
          productOne: file(relativePath: {eq: "images/juice.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          productTwo: file(relativePath: {eq: "images/btwellness.png"}) {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          productThree: file(relativePath: {eq: "images/cbddrip.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          productFour: file(relativePath: {eq: "images/mod.png"}) {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          productFive: file(relativePath: {eq: "images/suorin2.png"}) {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          productSix: file(relativePath: {eq: "images/vapepens.png"}) {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        `}
        render={data => (
          <>
          <h1 className="my-5">Purveyor of All Natural E-Liquids and CBD</h1>
          <hr/>
          <div className="row">
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="/"><Img className="card-img-top" fluid={data.productOne.childImageSharp.fluid} alt={data.productOne.childImageSharp.fluid.originalName}/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/">Natural E-Liquids</a>
                  </h4>
                  <p className="card-text">Delicious natural flavored e-liquids.  Try our all time favorite <i>Waffle Cone</i> flavor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="/"><Img className="card-img-top" fluid={data.productTwo.childImageSharp.fluid} alt={data.productTwo.childImageSharp.fluid.originalName}/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/">BeTru Wellness</a>
                  </h4>
                  <p className="card-text">BeTru Wellness have truly set the gold standard for hemp-derived products with our powerful plant-based formulas designed to support the BODY, MIND, and SOUL.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="/"><Img className="card-img-top" fluid={data.productThree.childImageSharp.fluid} alt={data.productThree.childImageSharp.fluid.originalName}/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/">CBD Drip</a>
                  </h4>
                  <p className="card-text">CBD Drip is the leader in distributing premium quality full spectrum hemp CBD oil that works. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="/"><Img className="card-img-top" fluid={data.productFour.childImageSharp.fluid} alt={data.productFour.childImageSharp.fluid.originalName}/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/">Premium Vape Mods</a>
                  </h4>
                  <p className="card-text">For the serious vaping connoisseur.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="/"><Img className="card-img-top" fluid={data.productFive.childImageSharp.fluid} alt={data.productFive.childImageSharp.fluid.originalName}/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/">Compact E-Cigarettes</a>
                  </h4>
                  <p className="card-text">Descreet and practical</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="/"><Img className="card-img-top" fluid={data.productSix.childImageSharp.fluid} alt={data.productSix.childImageSharp.fluid.originalName}/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/">Mod Atomizers and Parts</a>
                  </h4>
                  <p className="card-text">Have our experts help you customize your vape rig.</p>
                </div>
              </div>
            </div>
          </div>
          </>
        )}
      />
  </section>
)

export default Products
