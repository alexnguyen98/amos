import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const route = useRouter()

  let className = children.props.className || ''

  if (route.pathname === href) {
    className = `${className} active`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}