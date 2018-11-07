import React from 'react'

import Vape from '../images/vape.jpg'

const Feature = () => (
  <section>
    <div className="row">
      <div className="col-lg-6">
        <h2>Modern Business Features</h2>
        <p>The Modern Business template by Start Bootstrap includes:</p>
        <ul>
          <li>
            <strong>Bootstrap v4</strong>
          </li>
          <li>jQuery</li>
          <li>Font Awesome</li>
          <li>Working contact form with validation</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid rounded" src={Vape} alt=""/>
      </div>
    </div>
    <hr/>
  </section>
)

export default Feature