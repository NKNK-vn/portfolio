import React from 'react'
import PropTypes from 'prop-types'
import { CloseButton, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { BuildingOfficeIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'

const ExperienceItemViewModal = ({ isOpen, setIsOpen, data }) => {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
            <div className='fixed inset-0 flex w-screen items-center justify-center'>
                <DialogPanel className='max-w-lg space-y-4 border bg-white px-8 py-5'>
                    <div className='flex justify-end'>
                        <CloseButton className='flex items-center justify-center'>
                            <XMarkIcon className='size-8' />
                        </CloseButton>
                    </div>
                    <DialogTitle className='font-bold justify-center flex text-xl'>{data?.title}</DialogTitle>
                    <div className='flex flex-col'>
                        <div className='inline-flex gap-2'>
                            <BuildingOfficeIcon className='size-5 text-rose-500' />
                            <span>Company: {data?.organization}</span>
                        </div>
                        <div className='inline-flex gap-2'>
                            <ClockIcon className='size-5 text-rose-500' />
                            <span>
                                Time: {data?.startTime} - {data?.endTime}
                            </span>
                        </div>
                    </div>
                    <Description>
                        <div dangerouslySetInnerHTML={{ __html: data?.htmlDescription }} />
                    </Description>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

ExperienceItemViewModal.defaultProps = {
    itemOnClick: () => {},
    index: 0
}

ExperienceItemViewModal.propTypes = {
    data: PropTypes.shape({
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string,
        title: PropTypes.string.isRequired,
        organization: PropTypes.string.isRequired,
        ref: PropTypes.string,
        htmlDescription: PropTypes.string
    }).isRequired,
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default ExperienceItemViewModal
