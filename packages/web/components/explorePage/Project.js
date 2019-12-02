import React from 'react'
import Link from 'next/link'

export default ({data}) =>
  <div className="project">
    <Link
      href="p/[id]"
      as={`p/${data.id}`}
    >
      <a className="title">{data.title}</a>
    </Link>
    <div className="creators">
      <p>by</p>
      {data.creators.map(i => (
        <Link 
          href="u/[id]" 
          as={`u/${i.id}`}
          key={i.id}
        >
          <a>
            <img src={i.profilePic} />
            <div className="popover">{i.name}</div>
          </a>
        </Link>
      ))}</div>
    <style jsx>{`
      @import '../../node_modules/@tiktok/ui/src/styles/colors.scss';
      @import '../../node_modules/@tiktok/ui/src/styles/shadows.scss';

      .project {
        padding: 15px 20px;
        border: 1px solid $white-2;
        border-left-width: 4px;
        margin-bottom: 
        15px;
      }
      .title {
        font-size: 1.3rem
      }
      .creators {
        margin-top: 15px;
        display: flex;
        p {
          color: grey;
          white-space: nowrap;
          margin-right: 10px;
        }
        a {
          width: 1.5rem;
          height: 1.5rem;
          cursor: pointer;
          position: relative;
          img {
            border-radius: 3px;
            width: 100%;
            height: 100%;
            object-fit: cover
          }
          &:hover .popover {
            display: block;
          }
        }
      }
      .popover {
        box-shadow: $shadow-1;
        padding: 5px 15px;
        background: white;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        color: $black;
        font-weight: bold;
        white-space: nowrap;
        display: none;
        &:hover {
          text-decoration: underline
        }
      }
    `}</style>
  </div>