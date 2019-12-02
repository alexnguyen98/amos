import React from 'react'
import Link from 'next/link'

export default ({ data }) =>
  <section>
    <div className="top">
      <h2>Create your own portfolio or find an interesting projects to start</h2>
      <p>Dont't know how to start? Never heard of this job?</p>
    </div>
    <ul>
      {data.map(i =>
        <Link 
          key={i.id}
          href="p/[id]"
          as={`p/${i.id}`}
        >
          <a>
            <li>{i.title}</li>
          </a>
        </Link>
      )}
    </ul>
    <style jsx>{`
      @import '../../node_modules/@tiktok/ui/src/styles/colors.scss';

      .top {
        padding: 50px 20px 30px;
        text-align: center;
        h2 {
          margin-bottom: 10px;
          font-size: 1.3rem;
          font-weight: 700;
        }
        p {
          color: $grey-1;
        }
      } 
      ul {
        margin: 10px 0;
        padding: 20px 10px;
        background: #f0fff5;
        display: inline-flex;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            display: none;
        }
        li {
          border: 1px solid $white-2;
          border-left-width: 4px;
          padding: 20px;
          width: 15rem;
          background: white;
          margin: 10px;
          transition: .2s ease-in;
          &:hover {
            border-color: grey;
            transition: .2s ease-in;
            transform: scale(1.1)
          }
        }
      }
    `}</style> 
  </section>   