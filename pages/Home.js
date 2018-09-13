import React from 'react'
import dynamic from 'next/dynamic'

const home = ()=>{

    const DynamicComponent = dynamic(import('../Components/main'))
    return(
        <DynamicComponent />
    )
}

export default home