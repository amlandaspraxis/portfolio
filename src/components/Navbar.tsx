'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const sideMenuRef = useRef<HTMLUListElement | null>(null)
  const navRef = useRef<HTMLElement | null>(null)
  const navLinkRef = useRef<HTMLUListElement | null>(null)

  const openMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(-16rem)')
  }

  const closeMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(16rem)')
  }

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  }

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current || !navLinkRef.current) return

      if (window.scrollY > 50) {
        navRef.current.classList.add(
          'bg-white/50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-[#0B0B0F]/80',
          'dark:shadow-white/10'
        )
        navLinkRef.current.classList.remove(
          'bg-white',
          'shadow-sm',
          'bg-opacity-50',
          'dark:border',
          'dark:border-white/30'
        )
      } else {
        navRef.current.classList.remove(
          'bg-white/50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-[#0B0B0F]/80',
          'dark:shadow-white/10'
        )
        navLinkRef.current.classList.add(
          'bg-white',
          'shadow-sm',
          'bg-opacity-50',
          'dark:border',
          'dark:border-white/30'
        )
      }
    }

    window.addEventListener('scroll', onScroll)

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Background glow */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] dark:hidden">
        <Image
          src="/assets/header-bg-color.png"
          alt="bg"
          width={1200}
          height={400}
          className="w-full"
        />
      </div>

      <nav
        ref={navRef}
        className="fixed top-0 z-50 w-full px-5 py-4 lg:px-8 xl:px-[8%]"
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={112}
              height={40}
              className="dark:hidden"
            />
            <Image
              src="/assets/logo_dark.png"
              alt="Logo dark"
              width={112}
              height={40}
              className="hidden dark:block"
            />
          </Link>

          {/* Desktop menu */}
          <ul
            ref={navLinkRef}
            className="hidden md:flex items-center gap-8 rounded-full px-12 py-3 
              bg-white/50 shadow-sm backdrop-blur 
              dark:border dark:border-white/20 dark:bg-transparent"
          >
            {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-600 hover:text-black transition
                    dark:text-gray-300 dark:hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme}>
              <Image
                src="/assets/moon_icon.png"
                alt="moon"
                width={20}
                height={20}
                className="dark:hidden"
              />
              <Image
                src="/assets/sun_icon.png"
                alt="sun"
                width={20}
                height={20}
                className="hidden dark:block"
              />
            </button>

            <Link
              href="#contact"
              className="hidden lg:flex items-center gap-2 rounded-full border
                border-gray-300 px-6 py-1.5 text-sm
                hover:bg-gray-100/70 transition
                dark:border-white/30 dark:hover:bg-white/10"
            >
              Contact
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={openMenu}>
              <Image
                src="/assets/menu-black.png"
                alt="menu"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <Image
                src="/assets/menu-white.png"
                alt="menu dark"
                width={24}
                height={24}
                className="hidden dark:block"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 -right-64 z-50 h-screen w-64 
            bg-rose-50 px-10 py-20 transition duration-500
            dark:bg-[#111111] md:hidden"
        >
          <button
            className="absolute right-6 top-6"
            onClick={closeMenu}
          >
            <Image
              src="/assets/close-black.png"
              alt="close"
              width={20}
              height={20}
              className="dark:hidden"
            />
            <Image
              src="/assets/close-white.png"
              alt="close dark"
              width={20}
              height={20}
              className="hidden dark:block"
            />
          </button>

          {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
            <li key={item} className="mb-4">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-lg text-gray-700 dark:text-gray-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
