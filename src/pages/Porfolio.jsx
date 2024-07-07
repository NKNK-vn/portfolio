import { Button } from '@headlessui/react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ThemeContext from '../contexts/themeContexts'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const Porfolio = ({ children }) => {
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

    return (
        <div>
            <div className='flex justify-between items-center'>
                <NavLink to={`/portfolio`}>
                    <img src={Logo} alt='avatar' width={36} />
                </NavLink>
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
                                        <NavLink
                                            to={`/portfolio/${TABS?.[key]?.tab}`}
                                            end={TABS?.[key]?.tab === TABS?.HOME?.tab}
                                            className={({ isActive }) => {
                                                const activeClass = isActive
                                                    ? 'bg-gradient-to-r from-red-600 to-rose-500'
                                                    : ''
                                                return `${activeClass} my-1 rounded-xl bg-gray-400 py-2 px-4 text-sm text-white group flex w-full items-center`
                                            }}
                                            key={key?.title}
                                        >
                                            {TABS?.[key]?.title}
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    ) : (
                        <div className='flex gap-2'>
                            {Object.keys(TABS)?.map((key) => (
                                <NavLink
                                    to={`/portfolio/${TABS?.[key]?.tab}`}
                                    // end={TABS?.[key]?.tab === TABS?.HOME?.tab}
                                    className={({ isActive }) => {
                                        const activeClass = isActive ? 'bg-gradient-to-r from-red-600 to-rose-500' : ''
                                        return `${activeClass} my-1 rounded-xl bg-gray-400 py-2 px-4 text-sm text-white group flex w-full items-center`
                                    }}
                                    key={key?.title}
                                >
                                    {TABS?.[key]?.title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-20'>{children}</div>
        </div>
    )
}

Porfolio.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Porfolio
