import React from 'react'

interface IPlainTextProps {
    align?: "left" | "center" | "right"
    className?: string;
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<any>
}

const PlainText = ({ align = "left", children, className = "", ...rest }: IPlainTextProps) => {
    return (
        <span {...rest} className={`w-full text-gray-800 text-${align} ${className}`}>{children}</span>
    )
}

export default PlainText