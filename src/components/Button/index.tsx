'use client'

import Link from 'next/link'
import React from 'react'

interface typeButon {
    title: string,
    styleColor: boolean,
}

const index = ({ title, styleColor }: typeButon) => {
    return (
        <Link
            href='mailto:nata.codedev@gmail.com'
            target='__blanck'
            className={styleColor ? 'style_on' : 'style_off'}
        >
            {title}
        </Link>
    )
}

export default index