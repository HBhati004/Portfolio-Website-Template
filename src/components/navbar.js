import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Logo from '../pictures/Logo 1.png';
import LanguageSwitcher from './languageswitcher'; // Import the LanguageSwitcher

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Function to handle scrolling with custom easing
const handleScroll = (to, offset) => {
    scroller.scrollTo(to, {
        duration: 100,
        delay: 0,
        smooth: 'easeInOutQuad',
        offset: offset,
    });
};

export default function Navbar() {
    const { t } = useTranslation();

    const navigation = [
        { name: t('navbar.home'), href: 'hero' },
        { name: t('navbar.about'), href: 'about' },
        { name: t('navbar.services'), href: 'services' },
        { name: t('navbar.appointment'), href: 'appointment' },
        { name: t('navbar.contact'), href: 'contact' },
    ];

    return (
        <Disclosure as="nav" className="fixed top-0 w-full z-20" style={{ backgroundColor: '#043464' }}>
            {({ open, close }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <img className="w-auto h-12" src={Logo} alt="Logo" />
                            </div>

                            {/* Desktop view */}
                            <div className="hidden sm:flex sm:items-center sm:justify-between sm:flex-1">
                                <div className="flex-1 flex justify-center space-x-2">
                                    {navigation.map((item) => (
                                        <span
                                            key={item.name}
                                            onClick={() => handleScroll(item.href, -64)}
                                            className={classNames(
                                                'text-gray-100 hover:text-gray-400 transition duration-300',
                                                'rounded-md px-3 py-2 text-m font-medium cursor-pointer',
                                                'transform hover:scale-110'
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="ml-4 flex items-center">
                                    <LanguageSwitcher />
                                </div>
                            </div>

                            {/* Mobile view */}
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <div className="mr-2">
                                    <LanguageSwitcher />
                                </div>
                                {/* Mobile menu button */}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:text-gray-400 transition duration-300">
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
                        <div className="flex flex-col items-center px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <span
                                    key={item.name}
                                    onClick={() => { handleScroll(item.href, -64); close(); }}
                                    className={classNames(
                                        'text-gray-100 hover:text-gray-400 transition duration-300',
                                        'rounded-md px-3 py-2 text-large font-medium cursor-pointer',
                                        'transform hover:-translate-y-1'
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
