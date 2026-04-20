import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'

const Logo = ({ width = 120 }) => {
  return (
    <Link href={'/'}>
      <Image src='/logo/logo.png' width={width} alt='logo' />
      &nbsp;
      &nbsp;

      <Image src='/logo/logo_rent.png' width={width} alt='logo' />

    </Link>
  )
}

export default Logo
