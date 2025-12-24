"use client"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className='py-10 mt-20'>
            <div className='max-w-6xl mx-auto px-6'>
                {/* Top section  */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                    {/* Logo Name  */}
                    <h3 className='text-2xl font-bold text-gray-800'>Shoaib khan</h3>
                    {/* social Links  */}
                    <div className='flex space-x-6'>
                        <Link href="https://github.com/sk0045"
                        target='_blank'
                        className='text-gray-600 hover:text-indigo-600 transition-colors'
                        >
                        <Github className='w-5 h-5'/>
                        </Link>
                        <Link href="https://linkedin.com/in/shoaib-khan-062429385"
                        target='_blank'
                        className='text-gray-600 hover:text-indigo-600 transition-colors'
                        >
                        <Linkedin className='w-5 h-5'/>
                        </Link>
                        <Link href="mailto:skbaloch0045@gmail.com"
                        target='_blank'
                        className='text-gray-600 hover:text-indigo-600 transition-colors'
                        >
                        <Mail className='w-5 h-5'/>
                        </Link>
                    </div>
                </div>

            {/* Divider  */}
            <div className='border-t border-gray-200 my-6'/>
            <div className='text-center text-small text-gray-500'>
               © {new Date().getFullYear()} Shoaib Khan. All right reserved.
            </div>
            </div>
        </footer>
        
    )
}
