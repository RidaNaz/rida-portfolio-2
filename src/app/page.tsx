"use client"

import React, { useState, useEffect } from "react"
import NavMobile from "../components/NavMobile"
import Hero from '../components/Hero'
import Navbar from "../components/Navbar"
import AboutMe from "../components/AboutMe"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Project from "../components/Project"
import Price from "@/components/Price"
import Reviews from "@/components/Reviews"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  // animation setup

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom"
    })
  })

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  )
}

export default HomePage