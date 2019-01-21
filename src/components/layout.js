import React from 'react'
import Helmet from 'react-helmet'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import Navbar from './navbar'

const Layout = ({children}) => (
  <div >
    <Helmet>
      <title>Vapeplace CBD</title>
      <meta name="description" content="Vapeplace Application" />
    </Helmet>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Navbar/>
    <div className="container">{children}</div>
  </div>

)

export default Layout
