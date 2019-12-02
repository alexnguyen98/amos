import React from 'react'

export default ({children, active, onClick}) =>
  <div 
    className={ active ? 'active' : ''}
    onClick={onClick}
  >{children}
  <style jsx>{`
    div {
      margin-right: 10px;
      padding: 8px 15px;
      cursor: pointer;
      color: gray
    }
    div:hover {
      background: #F7F7F7;
    }
    div.active {
      background: darkcyan;
      color: white
    }
  `}</style>
  </div>