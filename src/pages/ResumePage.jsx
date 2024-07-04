import React, { useEffect, useState } from 'react'
import { AcademicCapIcon, BriefcaseIcon, LightBulbIcon, TrophyIcon } from '@heroicons/react/24/outline'
import personalData from '../common/data/userData'
import ExperienceItemComponent from '../components/ExperienceItemComponent'
import ExperienceItemViewModal from '../components/ExperienceItemViewModal'
import { Button } from '@headlessui/react'
import classNames from 'classnames'

const ResumePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dataToView, setDataToView] = useState({})
    useEffect(() => {
        if (!isModalOpen) {
            setDataToView({})
        }
    }, [isModalOpen])
    const experienceOnClick = (e, data) => {
        e?.preventDefault()
        if (data?.ref) {
            window.open(data?.ref, '_blank')
        } else if (data?.htmlDescription) {
            setIsModalOpen(true)
            setDataToView(data)
        }
    }
    return (
        <>
            <div className='bg-white rounded-2xl text-left p-10 shadow-lg'>
                <div className='relative flex py-5 items-center'>
                    <span className='flex-shrink mx-4 text-4xl font-bold'>Resume</span>
                    <div className='flex-grow border-t-2 border-red-500 max-w-full' />
                </div>
                <div className='my-10 grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='md:col-span-1'>
                        <div className='inline-flex items-center gap-2'>
                            <AcademicCapIcon className='size-10 text-rose-500' />
                            <span className='text-2xl font-semibold'>Education</span>
                        </div>
                        <div className='flex flex-col'>
                            {personalData?.education?.map((item, index) => (
                                <ExperienceItemComponent
                                    data={item}
                                    key={item?.title}
                                    itemOnClick={experienceOnClick}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='inline-flex items-center gap-2'>
                            <BriefcaseIcon className='size-10 text-rose-500' />
                            <span className='text-2xl font-semibold'>Experience</span>
                        </div>
                        <div className='flex flex-col'>
                            {personalData?.workExperience?.map((item, index) => (
                                <ExperienceItemComponent
                                    data={item}
                                    key={item?.title}
                                    itemOnClick={experienceOnClick}
                                    index={index + 1}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='inline-flex items-center gap-2'>
                            <TrophyIcon className='size-10 text-rose-500' />
                            <span className='text-2xl font-semibold'>Certification</span>
                        </div>
                        <div className='flex flex-col'>
                            {personalData?.certification?.map((item, index) => (
                                <ExperienceItemComponent
                                    data={item}
                                    key={item?.title}
                                    itemOnClick={experienceOnClick}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='inline-flex items-center gap-2'>
                            <LightBulbIcon className='size-10 text-rose-500' />
                            <span className='text-2xl font-semibold'>Working Skills</span>
                        </div>
                        <div>
                            {personalData?.skills?.map((item, index) => (
                                <Button
                                    disabled
                                    key={item}
                                    className={classNames(
                                        `${index % 2 === 0 ? 'bg-cyan-50' : 'bg-rose-50'}`,
                                        'm-1 p-3 rounded-xl'
                                    )}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='my-10 grid md:grid-cols-3 grid-cols-1 gap-4'></div>
            </div>
            <ExperienceItemViewModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} data={dataToView} />
        </>
    )
}

export default ResumePage
