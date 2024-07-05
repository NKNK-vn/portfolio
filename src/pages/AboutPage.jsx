import React from 'react'
import UserAvatar from '../assets/img/avatar.jpg'
import personalData from '../common/data/userData'
import { CalendarDaysIcon, DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Button } from '@headlessui/react'

const AboutPage = () => {
    return (
        <div className='bg-white rounded-2xl text-left p-10 shadow-lg'>
            <div className='relative flex py-5 items-center'>
                <h1 className='flex-shrink mx-4 text-4xl font-bold'>About Me</h1>
                <div className='flex-grow border-t-2 border-red-500 max-w-full' />
            </div>
            <div className='my-10 grid md:grid-cols-4 grid-cols-1'>
                <div className='md:col-span-1'>
                    <img src={UserAvatar} alt='avatar' className='rounded-md aspect-[3/4]' width={600} />
                </div>
                <div className='md:col-span-3 mt-5 md:mt-0 md:ml-5'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Who Am I?</h2>
                        <div className='mt-3 text-base'>{personalData?.objective}</div>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl font-semibold'>Personal Info</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
                            <div className='flex'>
                                <Button disabled className='shadow-lg rounded-xl p-3'>
                                    <DevicePhoneMobileIcon className='size-6 text-red-600' />
                                </Button>
                                <div className='flex flex-col justify-between ml-3'>
                                    <div className='text-sm'>Phone</div>
                                    <div className='font-medium'>{personalData?.phoneNumber}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <Button disabled className='shadow-lg rounded-xl p-3'>
                                    <EnvelopeIcon className='size-6 text-cyan-500' />
                                </Button>
                                <div className='flex flex-col justify-between ml-3'>
                                    <div className='text-sm'>Email</div>
                                    <div className='font-medium'>{personalData?.email}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <Button disabled className='shadow-lg rounded-xl p-3'>
                                    <MapPinIcon className='size-6 text-rose-500' />
                                </Button>
                                <div className='flex flex-col justify-between ml-3'>
                                    <div className='text-sm'>Location</div>
                                    <div className='font-medium'>{personalData?.location}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <Button disabled className='shadow-lg rounded-xl p-3'>
                                    <CalendarDaysIcon className='size-6 text-purple-500' />
                                </Button>
                                <div className='flex flex-col justify-between ml-3'>
                                    <div className='text-sm'>Birthday</div>
                                    <div className='font-medium'>{personalData?.birthday}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
