import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-500 shadow-md hover:shadow-lg hover:shadow-primary-600/20',
      secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-200 shadow-sm',
      ghost: 'bg-transparent text-textSecondary hover:bg-black/5 hover:text-textPrimary',
      glass: 'bg-white/40 backdrop-blur-md border border-white/50 text-textPrimary hover:bg-white/60 shadow-glass hover:shadow-soft'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ y: 1, scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
