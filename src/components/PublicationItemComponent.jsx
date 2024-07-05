import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@headlessui/react'
import classNames from 'classnames'

const PublicationItemComponent = ({ data, itemOnClick, index }) => {
    return (
        <Button
            disabled={!data?.ref}
            className={classNames(
                'text-left p-3 m-1 rounded-xl',
                `${index % 2 === 0 ? 'bg-rose-50 data-[hover]:bg-rose-100' : 'bg-cyan-50 data-[hover]:bg-cyan-100'}`
            )}
            onClick={(e) => itemOnClick(e, data)}
        >
            <div className='text-xl font-semibold'>{data?.paperName || 'No title'}</div>
            <div className='text-sm font-light'>
                {data?.conference} - {data?.publishDate}
            </div>
            <div className='text-sm font-light'>Author: {data?.author}</div>
            <p>{data?.description}</p>
        </Button>
    )
}

PublicationItemComponent.defaultProps = {
    itemOnClick: () => {},
    index: 0
}

PublicationItemComponent.propTypes = {
    data: PropTypes.shape({
        publishDate: PropTypes.string.isRequired,
        conference: PropTypes.string.isRequired,
        paperName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        ref: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
    itemOnClick: PropTypes.func,
    index: PropTypes.number
}

export default PublicationItemComponent
