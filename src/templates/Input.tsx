import React, { type InputHTMLAttributes } from 'react'

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <div>
            <input
                className={`bg-primary-dark/20 p-2 w-full rounded border border-border-dark/20 text-text-light ${className || ''}`}
                {...props}
            />
        </div>
    )
}

export default Input