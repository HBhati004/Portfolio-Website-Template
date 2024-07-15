import React from 'react';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { scroller } from 'react-scroll';
import Logo from '../pictures/Logo 1.png';

const navigation = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Appointment', href: 'appointment' },
    { name: 'Contact', href: 'contact' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Function to handle scrolling with custom easing
const handleScroll = (to, offset) => {
    scroller.scrollTo(to, {
        duration: 100, // Adjust the duration to control the speed of the scroll
        delay: 0,
        smooth: 'easeInOutQuad', // Use a predefined string for smooth scrolling
        offset: offset,
    });
};

export default function Navbar() {
    return (
        <Disclosure as="nav" className="fixed top-0 w-full z-20" style={{ backgroundColor: '#043464' }}>
            {({ open, close }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    className="w-auto h-12"
                                    src={Logo}
                                    alt="Logo"
                                />
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1">
                                <div className="flex space-x-2">
                                    {navigation.map((item) => (
                                        <span
                                            key={item.name}
                                            onClick={() => handleScroll(item.href, -64)}
                                            className={classNames(
                                                'text-gray-100 hover:scale-110 hover:text-black',
                                                'rounded-md px-3 py-2 text-m font-medium cursor-pointer'
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <span
                                    key={item.name}
                                    onClick={() => { handleScroll(item.href, -64); close(); }}
                                    className={classNames(
                                        'text-gray-100 hover:text-black hover:-translate-y-1 transition-transform duration-300 block rounded-md px-3 py-2 text-large font-medium cursor-pointer'
                                    )}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
