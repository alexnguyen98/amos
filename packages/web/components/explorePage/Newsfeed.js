import React, { useState } from 'react'
import CategoryNav from './CategoryNav'
import ContentFeed from './ContentFeed'

export default () => {
  const [activeClass,setClass] = useState('all')

  return(
    <section>
      <CategoryNav
        activeClass={activeClass}
        setClass={setClass}
      />
      <ContentFeed/>
      <style jsx>{`
        section {
          padding: 0 15px;
        }  
      `}</style>
    </section>
  )
}