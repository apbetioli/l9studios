import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className="fixed flex h-16 w-full items-center border-b border-gray-200 shrink-0 px-4 md:px-6 backdrop-blur-md z-10">
        <Logo />
        <Links className="shrink-0 items-center gap-4 hidden md:flex" />

        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Logo />
            <Links className="grid gap-4 py-8" />
          </SheetContent>
        </Sheet>
      </nav>
      <div className="mb-16">&nbsp;</div>
    </div>
  )
}

function MenuIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function Logo() {
  return (
    <Link className="mr-6 font-bold grow" href="/">
      Moving Platform Maker 2D
    </Link>
  )
}

function Links(props: { className: string }) {
  return (
    <div {...props}>
      <Link
        className="font-semibold hover:underline transition-colors hover:text-gray-500 dark:hover:text-gray-400"
        href="#"
      >
        Asset Store
      </Link>
      <Link
        className="font-semibold hover:underline transition-colors hover:text-gray-500 dark:hover:text-gray-400"
        href="/docs"
      >
        Documentation
      </Link>
      <Link
        className="font-semibold hover:underline transition-colors hover:text-gray-500 dark:hover:text-gray-400"
        href="mailto:contact@l9studios.com"
      >
        Contact
      </Link>
    </div>
  )
}
