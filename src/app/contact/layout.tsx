import HeaderNav from '@/components/header-nav/header-nav';
import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact'
}

export default function ContactLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderNav />
      {children}
    </>
  )
}
