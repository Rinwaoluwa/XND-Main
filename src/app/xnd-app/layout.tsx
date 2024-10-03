import React from 'react';
import { Metadata } from 'next';
import HeaderNav from '@/components/header-nav/header-nav';

export const metadata: Metadata = {
  title: 'Web App'
}

export default function XndAppLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderNav bgColor='bg-black' />
      {children}
    </>
  )
}
