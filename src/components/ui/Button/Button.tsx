import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props },
    ref
  ) => {
    // Construct class names mapping
    const baseClass = styles.button;
    const variantClass = styles[`variant-${variant}`];
    const sizeClass = styles[`size-${size}`];
    const loadingClass = isLoading ? styles.loading : '';
    
    // Combine all classes securely
    const combinedClasses = [
      baseClass,
      variantClass,
      sizeClass,
      loadingClass,
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className={styles.loader}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
