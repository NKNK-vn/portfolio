import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@headlessui/react'
import classNames from 'classnames'

const ExperienceItemComponent = ({ data, itemOnClick, index }) => {
    return (
        <Button
            disabled={!data?.ref && !data?.htmlDescription}
            className={classNames(
                'text-left p-3 m-1 rounded-xl',
                `${index % 2 === 0 ? 'bg-rose-50 data-[hover]:bg-rose-100' : 'bg-cyan-50 data-[hover]:bg-cyan-100'}`
            )}
            onClick={(e) => itemOnClick(e, data)}
        >
            <div className='text-sm font-light'>
                {data?.endTime ? `${data?.startTime || 'No time'} - ${data?.endTime}` : data?.startTime}
            </div>
            <div className='text-lg font-medium'>{data?.title || 'No title'}</div>
            <div className='text-sm font-light'>{data?.organization || 'No organization'}</div>
        </Button>
    )
}

ExperienceItemComponent.defaultProps = {
    itemOnClick: () => {},
    index: 0
}

ExperienceItemComponent.propTypes = {
    data: PropTypes.shape({
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string,
        title: PropTypes.string.isRequired,
        organization: PropTypes.string.isRequired,
        ref: PropTypes.string,
        htmlDescription: PropTypes.string
    }).isRequired,
    itemOnClick: PropTypes.func,
    index: PropTypes.number
}

export default ExperienceItemComponent
