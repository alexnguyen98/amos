import React from 'react'
import Head from 'next/head'
import BasicLayout from '../layouts/BasicLayout'
import Newsfeed from '../components/explorePage/Newsfeed'

export default () =>
  <BasicLayout>
    <Head>
      <title>Explore</title>
    </Head>
    <header>
      <div className="bg">
        <h1>Some description explaining how to find a project</h1>
      </div>
    </header>
    <Newsfeed/>
  <style jsx>{`
    header {
      padding: 15px;
    }
    .bg{
      background: #f9f9f9;
      height: 14rem;
      display: flex;
    }
    h1 {
      margin: auto;
      font-size: 1.3rem;
    }
  `}</style>
  </BasicLayout>