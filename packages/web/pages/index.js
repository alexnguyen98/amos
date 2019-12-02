import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import BasicLayout from '../layouts/BasicLayout'
import IntroBanner from '../components/homePage/IntroBanner'

export default function home({ data }) {
  return(
    <BasicLayout>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <div className="bg">
          <h1>Amos</h1>
        </div>
      </header>
      <main>
        <IntroBanner data={data}/>
        <div className="about">
          <p>asdadsad</p>
        </div>
      </main>
    <style jsx>{`
      @import '../../node_modules/@tiktok/ui/src/styles/colors.scss';

      header {
        padding: 15px;
      }
      .bg {
        background: url('/intro.png');
        height: 14rem;
        display: flex;
      }
      h1 {
        margin: auto;
        font-size: 2rem;
        font-weight: bold;
      }
      .about {
        display: flex;
        padding: 50px 10px;
        p {
          border-left: 4px solid $primary-2;
          padding: 0 10px;
          max-width: 30rem;
          width: 100%;
          margin: auto;
        }
      }
    `}</style>
    </BasicLayout>
  )
}

home.getInitialProps = async (ctx) => {
  try {
    // const { data } = await axios.get(ctx, '/recommended/projects')
    const data = [
      {
        title: 'The intricacies of nesting navigators in React Native using react-navigation',
        id: 1
      },
      {
        title: 'The intricacies of nesting navigators in React Native using react-navigation',
        id: 2
      },
      {
        title: 'The intricacies of nesting navigators in React Native using react-navigation',
        id: 3
      },
      {
        title: 'The intricacies of nesting navigators in React Native using react-navigation',
        id: 4
      },
      {
        title: 'The intricacies of nesting navigators in React Native using react-navigation',
        id: 5
      },
    ]
    return {
      data
    }

  } catch(err) {
    console.log(err)
    const data = []
    return { data }
  }
}