'use client'
import { TypewriterEffectSmooth } from '@/components/ui/TypewriterEffect'
import Link from 'next/link'
import BorderMagicButton from './ui/BorderMagicButton'

export default function Hero() {
  const words = [
    {
      text: 'Moving',
    },
    {
      text: 'Platform',
    },
    {
      text: 'Maker',
    },
    {
      text: '2D',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black h-screen">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The ultimate solution for your platformer game
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="https://assetstore.unity.com/packages/tools/level-design/moving-platform-maker-2d-71886?utm-source=lp">
          <BorderMagicButton className="w-40 h-10">
            Asset Store
          </BorderMagicButton>
        </Link>
        <Link href="/docs">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Documentation
          </button>
        </Link>
      </div>
    </div>
  )
}
