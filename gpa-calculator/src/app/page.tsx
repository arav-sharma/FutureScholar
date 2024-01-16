import HomepageHeader from '@/components/HomepageHeader';
import HomepageHero from '@/components/HomepageHero'
import HomepageShowcase from '@/components/HomepageShowcases'
import HomepageFooter from '@/components/HomepageFooter'

import './globals.css';

import { Poppins } from 'next/font/google';

export const poppinsNormal = Poppins({
  weight: "400",
  style: "normal",
  subsets: ['latin']
})

export const poppinsLight = Poppins({
  weight: "300",
  style: "normal",
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-[rgb(var(--text-color))]">
      <div>
      <HomepageHeader />
      <HomepageHero />
      <HomepageShowcase />
      <HomepageFooter />
      </div>
    </main>
  )
}
