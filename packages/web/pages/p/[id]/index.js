import React from 'react'
import { useRouter } from 'next/router'
import ProjectLayout from '../../../layouts/ProjectLayout'

export default function project() {
  const router = useRouter()
  const id = router.query.id

  return(
    <ProjectLayout>
      <h1>{id}</h1>
    </ProjectLayout>
  )
}

// project.getInitialProps = async (ctx) => {
//   const data = await api.get(ctx, '/quest/' + id)
//   if (!data) {
//     return {
//       id: 'none'
//     }
//   }
//   return {
//     id: data.id
//   }
// }