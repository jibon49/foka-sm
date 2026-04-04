import React from 'react'
import WorksButton from './WorksButton'
import WorkAccordion from './WorkAccordion'

const MoreWorks = () => {
    return (
        <div>
            <div className='flex justify-center items-center'><WorksButton /></div>
            <WorkAccordion />

        </div>
    )
}

export default MoreWorks