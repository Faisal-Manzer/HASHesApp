import React from 'react';
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { signIn, signOut, useSession } from 'next-auth/client';
import Button from 'components/atoms/Button';


const Example = ()=> {

    const [session, loading] = useSession();

  return (
    <div className=" max-w-sm pr-6  top-16">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-black group bg-orange-700 px-1 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <Button  className='text-lg' data-tip data-for='sign-out-tooltip'>
                    <img className=' w-8 h-8 rounded-full mx-2' src={session.user.image} alt={session.user.name} />
                </Button>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className=" absolute z-10  max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl"
              >
                <div className=" overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  
                  <div className=" p-2 bg-gray-200">
                    
                    <Button className=" border-gray-300 border-b flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {session.user.name}
                        </span>
                      </span>
                    </Button>
                    <Button className="border-gray-300 border-b w-full flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-yellow-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {session.user.email}
                        </span>
                      </span>
                    </Button>
                    <Button onClick={signOut} className="w-full flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-yellow-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Log Out
                        </span>
                      </span>
                    </Button>
                
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}



export default  Example;