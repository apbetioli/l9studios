'use client'

import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Objection from '@/components/Objection'
import { Testimonials } from '@/components/Testimonials'
import Video from '@/components/Video'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center max-w-screen-lg m-auto gap-20">
        <Hero />
        <Video />
        <Objection />
        <Testimonials />
        <FAQ />
      </div>
    </>
  )
}
