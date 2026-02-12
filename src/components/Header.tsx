'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="top-0 right-0 left-0 z-50 fixed border-b transition-colors px-6 py-4">
      <div className="flex justify-between items-center mx-auto container">
        <Link href="/" className="hover:opacity-80 font-amiri font-bold text-emerald-600 dark:text-emerald-400 text-xl transition-opacity">
          AL QURAN
        </Link>
      </div>
    </header>
  )
}
