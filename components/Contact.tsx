'use client'

import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './SubmitBtn'
import toast from 'react-hot-toast'
const Contact = () => {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 50rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:shahjawad@iut-dhaka.edu">
          shahjawad@iut-dhaka.edu
        </a>{' '}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully')
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all 
          dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all 
          dark:outline-none"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
export default Contact
