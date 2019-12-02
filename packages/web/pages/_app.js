import React from 'react'
import App from 'next/app'
import auth from '../middlewares/auth'
import { initStore } from '../redux/store'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import '@tiktok/ui/dist/style.min.css'
import '../styles/global.scss'
import Head from 'next/head'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    await auth(ctx)
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return {pageProps}
  }

  render() {
    const { Component, pageProps, store } = this.props
    return(
      <Provider store={store}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap" rel="stylesheet"/>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(initStore)(MyApp)