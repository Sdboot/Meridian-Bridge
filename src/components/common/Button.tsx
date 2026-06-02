'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const Button = ({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled = false,
  type = 'button',
  target,
  rel,
  ariaLabel,
}: ButtonProps) => {
  const baseStyles =
    'font-medium rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600';

  const variantStyles = {
    primary: 'bg-teal-600 text-ivory hover:bg-teal-700 shadow-md hover:shadow-lg',
    secondary: 'bg-navy-700 text-ivory hover:bg-navy-800 shadow-md hover:shadow-lg',
    gold: 'bg-gold-600 text-navy-700 hover:bg-gold-700 shadow-md hover:shadow-lg font-semibold',
    outline:
      'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-ivory',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClass} 
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={buttonClass}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
