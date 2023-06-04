import React, { Fragment, useState } from "react";
import {
  AiOutlineDown as downArrow,
  AiOutlineUp as upArrow,
} from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { Tooltip } from "@mui/material";

import { investmentTypes } from "../../constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropdownInput = ({ options, switchTab, style, optionalTitle }) => {
  const [title, setTitle] = useState(options[0]);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-full py-2 text-md font-medium text-[#062147] bg-transparent rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent">
          {style ? (
            <div className={`${style}`}>{title}</div>
          ) : (
            <div className="flex items-center">{optionalTitle}</div>
          )}

          {style && (
            <div className="dark:text-white text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute w-52 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            !style && "-translate-x-[90%]"
          }`}
        >
          <div className="py-1">
            {options.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 font-epilogue font-normal leading-[22px] text-gray-900"
                        : "font-epilogue font-normal leading-[22px] text-[#062147]",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={() => {
                      setTitle(item);
                      switchTab(item);
                    }}
                  >
                    {item}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownInput;
