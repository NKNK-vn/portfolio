import { Button } from '@headlessui/react'
import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import HomePage from './HomePage'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { USER_GITHUB } from '../constant'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ThemeContext from '../contexts/themeContexts'
import { Bars3Icon } from '@heroicons/react/24/outline'
import AboutPage from './AboutPage'

const Porfolio = () => {
    const { isMobile } = useContext(ThemeContext)
    const TABS = {
        HOME: {
            title: 'Home',
            tab: 'home'
        },
        ABOUT: {
            title: 'About',
            tab: 'about'
        },
        RESUME: {
            title: 'Resume',
            tab: 'resume'
        },
        CONTACT: {
            title: 'Contact',
            tab: 'contact'
        }
    }

    const [isActiveTab, setIsActiveTab] = useState(TABS?.HOME?.tab)

    const generatePageContent = () => {
        let content = 'Updating ...'
        if (isActiveTab === TABS?.HOME?.tab) {
            content = <HomePage />
        } else if (isActiveTab === TABS?.ABOUT?.tab) {
            content = <AboutPage />
        }
        return content
    }
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <SiGithub
                        className='cursor-pointer'
                        // color='#0766FF'
                        size={30}
                        onClick={() => window.open(USER_GITHUB, '_blank')}
                    />
                </div>
                <div>
                    {isMobile ? (
                        <Menu>
                            <MenuButton>
                                <Button
                                    className={classNames(
                                        'rounded-xl bg-gradient-to-r from-red-600 to-rose-500 py-2 px-4 text-sm text-white'
                                    )}
                                >
                                    <Bars3Icon className='size-5 text-black' />
                                </Button>
                            </MenuButton>
                            <MenuItems anchor='bottom end' transition>
                                {Object.keys(TABS)?.map((key) => (
                                    <MenuItem key={TABS?.[key]?.tab}>
                                        <Button
                                            className={classNames(
                                                'my-1 rounded-xl bg-gray-400 py-2 px-4 text-sm text-white group flex w-full items-center',
                                                {
                                                    'bg-gradient-to-r from-red-600 to-rose-500':
                                                        isActiveTab === TABS?.[key]?.tab
                                                }
                                            )}
                                            key={key?.title}
                                            onClick={() => setIsActiveTab(TABS?.[key]?.tab)}
                                        >
                                            {TABS?.[key]?.title}
                                        </Button>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    ) : (
                        Object.keys(TABS)?.map((key) => (
                            <Button
                                className={classNames(
                                    'mr-2 rounded-xl bg-gray-400 py-2 px-4 text-sm text-white data-[hover]:bg-gradient-to-r data-[hover]:from-red-600 data-[hover]:to-rose-500',
                                    { 'bg-gradient-to-r from-red-600 to-rose-500': isActiveTab === TABS?.[key]?.tab }
                                )}
                                key={key?.title}
                                onClick={() => setIsActiveTab(TABS?.[key]?.tab)}
                            >
                                {TABS?.[key]?.title}
                            </Button>
                        ))
                    )}
                </div>
            </div>
            <div className='mt-20'>{generatePageContent()}</div>
        </div>
    )
}

export default Porfolio