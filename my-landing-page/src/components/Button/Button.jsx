import React from 'react';
import "./Button.sass";

const Button = ({
    children,
    variant = 'contained',
    color = 'primary',
    size = 'md',
    disabled = false,
    type = 'button',
    onClick,
    className,
    ...props
  }) => {
    const buttonClasses = [
      'btn',
      `btn--${color}`,
      `btn--${size}`,
      `btn--${variant}`,
      className
    ].filter(Boolean).join(' ');
  
    return (
      <button
        type={type}
        className={buttonClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

export default Button;
