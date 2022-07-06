import React, { useState } from 'react'

interface IButtonProps {
    text: string
    action: () => void | any
}

const Button = ({ text, action }: IButtonProps) => {
    return (
        <button className='text-sm' onClick={action}>
            {text}
        </button>
    )
}

export default Button