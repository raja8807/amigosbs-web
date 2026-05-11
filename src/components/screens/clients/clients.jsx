import PageBanner from '@/components/common/page_banner/page_banner'
import React from 'react'
import IndustriesSection from '../home/sections/industries/industries'

const ClientsScreen = () => {
  return (
    <div>
      <PageBanner
        title="Clients"
        image="/images/about/banner.png"
      />
      <IndustriesSection/>
    </div>
  )
}

export default ClientsScreen
