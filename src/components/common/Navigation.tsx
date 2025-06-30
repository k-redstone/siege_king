'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import XIcon from '@/components/common/XIcon'
import { Button } from '@/components/ui/button'
import { NAVIGATION_MENU_ITEMS } from '@/constants/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-background/95 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-2"
          >
            <XIcon />
            <span className="text-primary text-2xl font-bold">SIEGE KING</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {NAVIGATION_MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`hover:text-primary text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-primary font-semibold'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-border mt-4 border-t pb-4 md:hidden">
            <div className="flex flex-col gap-3 pt-4">
              {NAVIGATION_MENU_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-primary font-semibold'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
