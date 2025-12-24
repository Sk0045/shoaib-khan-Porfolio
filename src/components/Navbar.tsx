"use client"
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

const Navbar = memo(() => {
  const [contactopen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOPen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutSide(event: MouseEvent) {
      if (
        contactRef.current && !contactRef.current.contains(event.target as Node)
      ) { setContactOpen(false); }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    }
  }, [])

  const handleSkillsClick = useCallback(() => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
    setMenuOPen(false);
  },[])
  const handleAboutClick = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    setMenuOPen(false);
  }, [])
  const handleServicesClick = useCallback(() => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    setMenuOPen(false);
  }, [])
  const handleProjectsClick = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    setMenuOPen(false);
  }, [])
  return (
    <nav className='container mx-auto pt-4 flex items-center justify-between px-4 relative'>
      {/* logo */}
      <h1 className='text-2xl font-semibold'>
        <span className='text-[#14279B]'>Shoaib </span>
        <span className='text-[#002265]'> Khan</span>
      </h1>
      {/* desktop view */}
      <div className='hidden md:flex items-center gap-6'>
        <Link
          href=""
          className='hover:underline text-[#212121] text-lg'
          onClick={handleAboutClick}
        >
          About
        </Link>
        <Link
          href=""
          className='hover:underline text-[#212121] text-lg'
          onClick={handleServicesClick}
        >
          Services
        </Link>
        <Link
          href=""
          className='hover:underline text-[#212121] text-lg'
          onClick={handleProjectsClick}
        >
          Projects
        </Link>
        <Link
          href=""
          className='hover:underline text-[#212121] text-lg'
          onClick={handleSkillsClick}
        >
          Skills
        </Link>

        <div className='relative'>
          <button
            type='button'
            className='text-white font-semibold py-2 px-4 bg-[#14279B] rounded-3xl cursor-pointer text-lg'
            onClick={() => setContactOpen(!contactopen)}
          >
            Contact Me</button>
          {
            contactopen && (
              <div className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-2xl py-3 flex flex-col  gap-3 z-50'>
                <a href="https://github.com/sk0045" target='_blank' className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700'><Github className='w-5 h-5' /> Github</a>
                <a href="https://linkedin.com/in/shoaib-khan-062429385" target='_blank' className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700'><Linkedin className='w-5 h-5' /> LinkedIn</a>
                <a href="mailto:skbaloch0045@gmail.com" target='_blank' className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700'><Mail className='w-5 h-5' /> Email</a>
              </div>
            )
          }
        </div>
      </div>
      {/* mobile view */}
      <button
        className='md:hidden text-[#212121]' onClick={() => setMenuOPen(!menuOpen)}>

        {menuOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
      </button>
      {/* mobile view */}
      {
        menuOpen && (
          <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50'>
            <Link
              href=""
              className='hover:underline text-[#212121]'
               onClick={handleAboutClick}
            >
              About
            </Link>
            <Link
              href=""
              className='hover:underline text-[#212121]'
               onClick={handleServicesClick}
            >
              Services
            </Link>
            <Link
              href=""
              className='hover:underline text-[#212121]'
               onClick={handleProjectsClick}
            >
              Projects
            </Link>
            <Link
              href=""
              className='hover:underline text-[#212121]'
               onClick={handleSkillsClick}
            >
              Skills
            </Link>
            {/* contact me Link (mobile) */}
            <div className='flex flex-col gap-4 mt-4'>
              <a href="https://github.com/sk0045" target='_blank' className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700'><Github className='w-5 h-5' />Github</a>
              <a href="https://linkedin.com/in/shoaib-khan-06" target='_blank' className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700'><Linkedin className='w-5 h-5' /> LinkedIn</a>
              <a href="mailto:skbaloch0045@gamil.com" target='_blank' className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700'><Mail className='w-5 h-5' /> Email</a>

            </div>
          </div>

        )
      }
    </nav>
  )
})
Navbar.displayName = 'Navbar';
export default Navbar;