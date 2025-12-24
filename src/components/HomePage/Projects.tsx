"use client"

import Image from 'next/image'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

const Projects: React.FC = memo(() => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    const projects = useMemo(() => [
        {
            name: "Youtube Clone",
            link: "https://youtube-clone-nu-dusky.vercel.app/",
            description: "It’s typically built with modern web technologies (like React/Next.js) and deployed on Vercel — similar to many open-source YouTube clone templates online that offer video browsing and playback interfaces styled after YouTube’s layout.",
            image:"/youtube-clone.png"
        },
        {
            name: "The Luck academy",
            link: "https://luckacademy.vercel.app/",
            description: "The project is built with modern frontend technologies and deployed on Vercel, making it suitable as a portfolio or demo education platform. ",
            image:"/luckacademy.png"
        },
        {
            name: "Ai ChatBot",
            link: "https://ai-chatbot-clone-zeta.vercel.app/",
            description: "It features a clean chat layout where users can interact with an AI model through text, simulating a smart conversational experience. The app is built with modern JavaScript frameworks and deployed on Vercel",
            image:"/Ai-chatbot.png"
        },
        {
            name: "Ecom Store",
            link: "https://e-com-fetch.vercel.app/",
            description: "It mimics an online shop interface where users can browse products pulled from an API, showing images, names, and prices. The project is built with modern web technologies and deployed on Vercel",
            image:"/Ecom-store.png"
        },
    ], [])
    const handleProjectsClick = useCallback((link: string)=>{
        window.open(link, '_blank', 'noopener,noreferre')
    },[])
    return (
        <section className={`py-20 px-6 sm:py-10 lg:px-20 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-10 " : ""}`} id='projects'>
            {/* Heading  */}
            <h2 className='text-4xl font-bold text-center text-[#14279B]'>My <span className='text-indigo-600'>Projects</span></h2>
            <p className='text-center text-gray-600 mt-2 max-w-2xl mx-auto'>Here are some of projects I've work on recently.</p>
            {/* Project card  */}
            <div className='mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {projects.map((projects)=>(
                    <div key={projects.name} className='group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500'>
                        {/* Image  */}
                        <div className='overflow'>
                            <Image 
                            src={projects.image}
                            alt={projects.name}
                            height={300}
                            width={400}
                            priority={false}
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            className='w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500'
                            sizes='(max-width:768px ) 100vw, (max-widht: 1200Px) 50vw 33vw'
                            />
                        </div>
                        {/* content  */}
                        <div className='p-5 flex flex-col justify-between h-44'>
                            <div>
                                <h3 className='text-xl font-semibold text-[#14279B] group-hover:text-indigo-600 transition-colors'>
                                    {projects.name}
                                </h3>
                                <p className='text-gray-600 text-sm mt-2 line-clamp-3'>{projects.description}</p>
                            </div>
                            {/* button  */}
                            <button
                             onClick={(()=>handleProjectsClick(projects.link))}
                              className='mt-4 inline-block text-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-[#608AF5] via-[#6366f1] to-[#608FA5] text-white shadow-md hover:shadow-lg hover-scale-105 hover:from-[#4338ca] hover:via-[#4f46e5] hover:to-[#6366f1] transition-all duration-300 ease-out'
                              >
                                View Project
                                </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
})

Projects.displayName = 'Projects';
export default Projects