import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon,GlobeIcon } from "@heroicons/react/outline";
import {Input} from './UI'
import {SwitchIcon} from '../components'
import navigation from "../utils/constants";

function Header() {
  const navLinks = [
    { name: "Popular", to: navigation.popular },
    { name: "Top rated", to: navigation.top_rated },
    { name: "Upcoming", to: navigation.upcoming },
    { name: "Trending", to: navigation.trending },
    { name: "Favorite", to: navigation.favorite },
    { name: "Latest", to: navigation.latest },
  ];

  return (
    <Popover>
      <div className="relative py-3 px-3 sm:px-4 lg:px-8 bg-gray-300">
        <nav className="relative flex items-center justify-between sm:h-10 lg:space-between" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="hidden sm:block">
              <Link to="/" >
                <span className="sr-only hidden sm:block">Filmapp</span>
                <img
                  alt="filmapp"
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                />
              </Link>
              </div>
              
              <Input placeholder="type to find something..."/>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block mx-4  md:mx-2  sm:space-x-2" >
          
            {navLinks.map((item) => (
              <Link key={item.name} to={item.to} className="font-medium text-indigo-600 hover:text-gray-900">
                {item.name}
              </Link>
            ))}
            {/* switch language*/}
          
          </div> 
          <div className="hidden md:block ml-2">
          <GlobeIcon className="h-5 w-5 text-indigo-500"/>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
                <GlobeIcon className="h-5 w-5 text-indigo-500"/>
            </div>
          
            {/* {switch language} */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
