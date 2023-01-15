import { ServiceType, services } from "@/data/services";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AddMenu({
  onClick,
}: {
    onClick: (type: ServiceType) => void;
}) {
  return (
    <div className="ml-auto w-10 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Add
            <DownSvg />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {services.map(service => (

              <Menu.Item key={service}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => onClick(service)}
                  >
                    {service}
                  </button>
                )}
              </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function DownSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="#f7f3f3"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <polygon points="208 96 128 176 48 96 208 96" opacity="0.2"></polygon>
      <polygon
        points="208 96 128 176 48 96 208 96"
        fill="none"
        stroke="#f7f3f3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polygon>
    </svg>
  );
}
