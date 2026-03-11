import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { About } from '@/components/sections/About/About'
import { Departments } from '@/components/sections/Departments/Departments'
import { IndustryTools } from '@/components/sections/IndustryTools/IndustryTools'
import { Timeline } from '@/components/sections/Timeline/Timeline'
import { Recruitment } from '@/components/sections/Recruitment/Recruitment'

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Departments />
      <IndustryTools />
      <Timeline />
      <Recruitment />
      <Footer />
    </main>
  )
}
