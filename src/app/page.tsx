import Compagnies from "./components/compagnies"
import Features from "./components/features"
import Footer from "./components/Footer"
import GetInTouch from "./components/Get-in-touch"
import OurProjects from "./components/our-projects"
import Pricing from "./components/pricing"
import Reviews from "./components/reviews"
import React from 'react'
import Header from './components/header'
import MobileHeader from './components/mobile-header'
import Hero from './components/hero'
import Process from './components/process'

function Home() {
  return (
    <>
      <Header />
      <MobileHeader />
      <Hero />
      <Features />
      <Process />
      <OurProjects />
      <Reviews />
      <Pricing />
      <Compagnies />
      <GetInTouch />
      <Footer />
    </>

  )
}

export default Home
