import React from 'react'
import Banner from '../components/home/Banner'
import Intro from '../components/home/Intro'
import Movie from '../components/home/Movie'
import Recipe from '../components/home/Recipe'

import AppLayout from '../components/Layouts/AppLayout'

const Homepage = () => {
  return (
    <AppLayout>
      <Banner />
      <Intro />
      <Movie />
      <Recipe />
    </AppLayout>
  )
}

export default Homepage