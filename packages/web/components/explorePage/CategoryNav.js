import React from 'react'
import Tag from '../Tag'

export default ({activeClass,setClass}) =>
  <nav>
    <Tag 
      active={activeClass === 'all'}
      onClick={()=> setClass('all')}
    >All</Tag>
    <Tag
      active={activeClass === 'tech'}
      onClick={()=> setClass('tech')}
    >Tech</Tag>
    <Tag
      active={activeClass === 'art'}
      onClick={()=> setClass('art')}
    >Art</Tag>
    <Tag
      active={activeClass === 'design'}
      onClick={()=> setClass('design')}
    >Design</Tag>
    <style jsx>{`
    nav {
      display: flex;
      background: white;
      position: sticky;
      top: 0;
      z-index: 1;
      padding: 15px 0;
      margin-bottom: 20px;
    }
    `}</style>
  </nav>
