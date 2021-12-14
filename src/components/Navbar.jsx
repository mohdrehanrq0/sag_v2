/* This example requires Tailwind CSS v2.0+ */
import React,{ Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import Logo from './../image/logo_sag_dark.png'
import {motion} from 'framer-motion';



export default function Navbar() {
  return (
      <motion.div className="header_div"
        initial={{y: -200,opacity: 0}}
        animate={{y: 0,opacity: 1}}
        transition={{delay: 1}}
      >
          <Popover 
            className="relative bg-white"
          >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-12 w-auto sm:h-14"
                src={Logo}
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            
            <a href="/#" className="text-base font-medium transition-all text-gray-500 hover:text-default-light transform hover:scale-125	">
              About
            </a>
            <a href="/#" className="text-base font-medium transition-all text-gray-500 hover:text-default-light transform hover:scale-125">
              Services
            </a>
            <a href="/#" className="text-base font-medium transition-all text-gray-500 hover:text-default-light transform hover:scale-125">
              Contact
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="/#" className="whitespace-nowrap text-base font-medium text-gray-500 ">
              <button class="bg-text-light hover:bg-text text-white font-bold rounded-full">
              <i class="Phone is-animating"></i>
               </button>
            </a>
            
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  
                    <a
                      href="/#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-600" aria-hidden="true" /> */}
                      <span className="ml-3 text-base font-medium text-gray-500 hover:text-default-light">About</span>
                    </a>
                    <a
                      href="/#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-600" aria-hidden="true" /> */}
                      <span className="ml-3 text-base font-medium text-gray-500 hover:text-default-light">Services</span>
                    </a>
                    <a
                      href="/#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-600" aria-hidden="true" /> */}
                      <span className="ml-3 text-base font-medium text-gray-500 hover:text-default-light">Contact</span>
                    </a>
                </nav>
              </div>
              
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
      </motion.div>
  )
}