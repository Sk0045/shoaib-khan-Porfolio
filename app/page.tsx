import Footer from '@/src/components/Footer'
import About from '@/src/components/HomePage/About'
import Introduction from '@/src/components/HomePage/Introduction'
import Projects from '@/src/components/HomePage/Projects'
import Services from '@/src/components/HomePage/services'
import Skills from '@/src/components/HomePage/Skills'
import React from 'react'

const page = () => {
  return (
    <>
    <Introduction />
    <Projects />
    <Skills />
    <About/>
    <Services />
    <Footer/>
    </>
  )
}

export default page