import React from 'react'
import Nav from '../components/layout/Nav'

export default ({children}) =>
  <div className="_layout">
    <div>
      {children}
    </div>
    <Nav/>
    <style jsx>{`
    ._layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    ._layout div {
      max-width: 50rem;
      width: 100%;
      background: #fff;
      margin: 0 auto;
      flex: 1;
    }
    `}</style>
  </div>