'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'light' | 'dark';
  border?: boolean;
}

const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'light',
  border = false,
}: CardProps) => {
  const baseStyles = 'rounded-xl overflow-hidden';

  const variantStyles = {
    light: 'bg-ivory border border-gray-200',
    dark: 'bg-navy-700 text-ivory',
  };

  const hoverStyles = hover ? 'card-hover' : '';
  const borderStyles = border ? 'border-l-4 border-gold-600' : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${borderStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
