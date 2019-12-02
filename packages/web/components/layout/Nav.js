import React from 'react'
import Link from '../utils/Link'

export default () =>
  <nav>
    <ul>
      <li><Link href='/'>
        <a>Home</a>
      </Link></li>
      <li><Link href='/explore'>
        <a>Explore</a>
      </Link></li>
      <li><Link href='/projects'>
        <a>Projects</a>
      </Link></li>
      <li><Link href='/profile'>
        <a>Profile</a>
      </Link></li>
    </ul>
    <style jsx>{`
    @import '../../node_modules/@tiktok/ui/src/styles/colors.scss';

    nav {
      position: sticky;
      bottom: 0;
      z-index: 10;
      background: #F8F8F8;
    }
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      max-width: 50rem;
      width: 100%;
      margin: auto
    }
    li {
      padding: 20px 0;
      display: flex;
      justify-content: center
    }
    a {
      color: gray;
      &.active {
        color: $primary-2;
      }
    }
    `}</style>
  </nav>