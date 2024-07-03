import React from 'react'
import UserAvatar from '../assets/img/avatar.jpeg'
import UserResume from '../assets/pdf/resume.pdf'
import { USER_FACEBOOK, USER_FULL_NAME, USER_LINKEDIN, USER_TITLE } from '../constant'
import { SiFacebook, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Button } from '@headlessui/react'

const HomePage = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src={UserAvatar} alt='avatar' className='rounded-full' width={200} />
            </div>
            <div className='mt-3 text-2xl font-semibold	'>{USER_FULL_NAME}</div>
            <div className='mt-1 font-light'>{USER_TITLE}</div>
            <div className='flex justify-center mt-5'>
                <SiFacebook
                    className='cursor-pointer mr-2'
                    color='#0766FF'
                    size={30}
                    onClick={() => window.open(USER_FACEBOOK, '_blank')}
                />
                <SiLinkedin
                    className='cursor-pointer mr-2'
                    color='#0B66C2'
                    size={30}
                    onClick={() => window.open(USER_LINKEDIN, '_blank')}
                />
            </div>
            <div className='mt-5'>
                <Button className='px-4 py-2 rounded-3xl text-white bg-red-600 data-[hover]:translate-y-1'>
                    <a download='khoi_cv.pdf' href={UserResume}>
                        Download CV
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default HomePage
