"use client"
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const TypingEffect = ({ description }: any) => {

    return <Typewriter
        options={{
            strings: [`${description}`],
            autoStart: true,
            loop: true
        }}
    />
}

export default TypingEffect;
