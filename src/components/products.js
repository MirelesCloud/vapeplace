import React from 'react'

import Vape1 from '../images/vape1.jpg'
import Vape2 from '../images/vape2.jpg'
import Vape3 from '../images/vape3.jpg'
import Vape4 from '../images/vape4.jpg'
import Vape5 from '../images/vape5.jpg'
import Vape6 from '../images/vape6.jpg'

const Products = () => (
  <section>
    <h2>Portfolio Heading</h2>

    <div className="row">
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/"><img className="card-img-top" src={Vape1} alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">Project One</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/"><img className="card-img-top" src={Vape2} alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">Project Two</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/"><img className="card-img-top" src={Vape3} alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">Project Three</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/"><img className="card-img-top" src={Vape4} alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">Project Four</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/"><img className="card-img-top" src={Vape5} alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">Project Five</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/"><img className="card-img-top" src={Vape6} alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">Project Six</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Products
