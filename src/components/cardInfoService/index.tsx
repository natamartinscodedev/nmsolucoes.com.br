'use client'

import Link from 'next/link'
import React from 'react'

type typeItems = {
    title: string,
    description: string,
    link: string
}

const index = ({ title, description, link }: typeItems) => {
    return (
        <div className='card_infoservice'>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Link href={`${link}`} target='__blank'>Modelo</Link>
        </div>
    )
}

export default index