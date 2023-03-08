import { Fragment, ReactNode, useState } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

interface DropDownProps {
  options: Array<string>;
  onValueSelect: (option: string) => void;
  Icon?: ReactNode;
}
export function SelectDropDown({ options, Icon }: DropDownProps) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button
          className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 
           flex items-center  
           hover:bg-gray-100 hover:duration-200
           border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
          <span className="mr-2">{Icon}</span>
          <span className="block truncate">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiOutlineChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2  text-center
                    ${active ? "bg-green-200" : "text-gray-900"}
                    `
                }
                value={option}>
                {({ selected }) => <>{option}</>}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
