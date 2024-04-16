'use client'
import Link from 'next/link'
import MagicButton from './ui/magic-button'
import Video from './Video'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-10">
      <h1 className="text-neutral-600 dark:text-neutral-200 text-4xl md:text-8xl font-bold text-center">
        Easily create 2D moving platforms
      </h1>

      <Link href="https://assetstore.unity.com/packages/tools/level-design/moving-platform-maker-2d-71886?utm-source=lp">
        <MagicButton>Get started with MPM2D</MagicButton>
      </Link>
    </div>
  )
}
