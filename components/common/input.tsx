import React from 'react'

interface ICustomInputProps {
    text: string
    name: string
    type: string
    placeholder?: string
    [key: string]: string | undefined
}

const CustomInput = ({ text, name, type = "text", placeholder, ...rest }: ICustomInputProps) => {
    return (
        <label className='inline-flex w-auto h-8 justify-center items-center border-2 rounded-l-md bg-white'>
            <span className='text-sm px-2'>{text}</span>
            <input className='text-sm focus:outline-none' {...rest} name={text} type={type} placeholder={placeholder} />
        </label>
    )
}

export default CustomInput