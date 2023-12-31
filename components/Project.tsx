'use client'

import { useRef } from 'react'
import { projectsData } from '@/lib/data'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = (typeof projectsData)[number]

const Project = ({ title, description, tags, imageUrl, url }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[42rem] border border-black/5
        overflow-hidden sm:pr-8 relative sm:h-[23rem] xs:h-[35rem] transition
        hover:bg-gray-200 sm:group-even:pl-8 rounded-lg dark:bg-white/10
        dark:hover:bg-white/20 dark:text-white/70"
      >
        <div
          className="pt-4 pb-7 px-4 sm:pl-10 sm:pr-2 sm:pt-10 
        sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p
            className="mt-2 leading-relaxed text-gray-700
          dark:text-white/70"
          >
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] py-1 px-3 text-[0.7rem] 
              uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link href={url} target="_blank">
          <Image
            className="absolute transition 
            sm:top-10 sm:-right-40 sm:w-[28.25rem] 
            xs:bottom-[0.1rem] xs:p-3
            sm:rounded-lg xs:rounded-[1.3rem]
          sm:shadow-2xl sm:block
          
          xs:group-hover:-translate-y-2

          sm:group-hover:scale-110
          sm:group-even:right-[initial] 
          sm:group-even:-left-40 
          
          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3
          sm:group-hover:-rotate-2
          
          sm:group-even:group-hover:translate-x-3
          sm:group-even:group-hover:translate-y-3
          sm:group-even:group-hover:rotate-2"
            src={imageUrl}
            alt={title}
            quality={95}
          />
        </Link>
      </section>
    </motion.div>
  )
}
export default Project
