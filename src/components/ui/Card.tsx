import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  glass?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ glass = false, className = '', children, ...props }, ref) => {
    const baseClass = glass 
      ? 'bg-surfaceGlass backdrop-blur-xl rounded-3xl border border-white/60 shadow-glass overflow-hidden' 
      : 'bg-surface/90 backdrop-blur-md rounded-3xl border border-white/40 shadow-deep overflow-hidden';

    const paddingClass = className.includes('p-') ? '' : 'p-8';

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`${baseClass} ${paddingClass} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
