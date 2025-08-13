import { Button } from '@headlessui/react'
import { EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'
import personalData from '../common/data/userData'

const ContactPage = () => {
    return (
        <div className='bg-white rounded-2xl text-left p-10 shadow-lg'>
            <div className='relative flex py-5 items-center'>
                <h1 className='flex-shrink mx-4 text-4xl font-bold'>Contact</h1>
                <div className='flex-grow border-t-2 border-red-500 max-w-full' />
            </div>
            <div className='my-10 grid md:grid-cols-3 grid-cols-1 gap-4'>
                <div className='col-span-1'>
                    <Button disabled className='w-full bg-rose-50 p-5 rounded-xl text-start h-full'>
                        <div className='inline-flex justify-items-start items-start gap-3'>
                            <PhoneIcon className='size-10 text-blue-400' />
                            <div className='text-lg'>
                                <h2>Phone:</h2>
                                <a target='_blank' href={`tel:${personalData?.phoneNumber}`} rel='noreferrer'>
                                    {personalData?.phoneNumber}
                                </a>
                            </div>
                        </div>
                    </Button>
                </div>
                <div className='col-span-1'>
                    <Button disabled className='w-full bg-rose-50 p-5 rounded-xl text-start h-full'>
                        <div className='inline-flex justify-items-start items-start gap-3'>
                            <EnvelopeOpenIcon className='size-10 text-yellow-400' />
                            <div className='text-lg'>
                                <h2>Email:</h2>
                                <a
                                    className='break-all'
                                    target='_blank'
                                    href={`mailto:${personalData?.email}`}
                                    rel='noreferrer'
                                >
                                    {personalData?.email}
                                </a>
                            </div>
                        </div>
                    </Button>
                </div>
                <div className='col-span-1'>
                    <Button disabled className='w-full bg-rose-50 p-5 rounded-xl text-start h-full'>
                        <div className='inline-flex justify-items-start items-start gap-3'>
                            <MapPinIcon className='size-10 text-green-400' />
                            <div className='text-lg'>
                                <h2>Address:</h2>
                                <a target='_blank' href='https://maps.app.goo.gl/EucKN2cnxvyyg7L28' rel='noreferrer'>
                                    {personalData?.location}
                                </a>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
