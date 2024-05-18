// kayen li t9olhom w kayen li non
"use client";
import { motion } from "framer-motion";

import { GoArrowRight, GoBook } from "react-icons/go";
import TransitionLink from "@/components/animations/TransitionLink";
import { GiBurningMeteor } from "react-icons/gi";
import { Meteors } from "@/components/ui/meteors";

export default async function Index() {
  return (
    <>
      <button className="right-3 top-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black mb-5">
        <a href="https://github.com/Zennerd404" target="_blank">
          <svg
            viewBox="0 0 16 16"
            className="w-5 h-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </button>
      <div className="hidden md:flex"><Meteors number={20} /></div>
      <div className="mx-auto max-w-screen-xl py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto sm:max-w-xl  lg:w-full text-center w-3/4">
          <motion.h1
            className="text-5xl text_gradient mb-5"
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            <div className='flex flex-col items-center text-white'>
                <span className='flex font-bold '>METE<span className=""><GiBurningMeteor/></span>R</span>
                <span className='animated-text font-normal text-[1.5rem]'>- <span className='text-white'>GAMES</span> -</span>
            </div>
            <br />
            Where Fortune Meets Innovation!
          </motion.h1>
          <motion.p
            className="mt-4 sm:text-xl/relaxed mb-5 text_gradient"
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            Be the first to experience the thrill of web3 gaming!
          </motion.p>
          <motion.div
            className="mt-8 flex sm:flex-row flex-col items-center justify-center gap-4 mb-5 "
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            <TransitionLink
              cn="block w-full rounded px-12 py-4 text-sm font-medium shadow focus:outline-none  active:text-grey-500 max-w-40 animate-pulse"
              label="Join the Waitlist"
              href="/contact_us"
              svg={{ component: <GoArrowRight className="ml-2" /> }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
