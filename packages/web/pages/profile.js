import React from 'react'
import Head from 'next/head'
import BasicLayout from '../layouts/BasicLayout'
import api from '../utils/api'

export default function profile({ id }) {
  return(
    <BasicLayout>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>Protected route</h1>
      <h2>userId = {id}</h2>
    </BasicLayout>
  )
}

profile.getInitialProps = async (ctx) => {
  const data = await api.get(ctx, '/user')
  if (!data) {
    return {
      id: 'none'
    }
  }
  return {
    id: data.id
  }
}
