import React from 'react'
import AppLayout from '../components/Layouts/AppLayout'
import KcalPage from '../components/report/KcalPage'

import ReportHeader from '../components/report/ReportHeader'

const ReportPage = () => {
  return (
    <AppLayout>
      <ReportHeader />
      <KcalPage />
    </AppLayout>
  )
}

export default ReportPage