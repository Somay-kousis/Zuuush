import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-textSecondary ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-2xl bg-white/60 border border-black/5 focus:border-primary-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100/50 shadow-inner-soft transition-all placeholder:text-textMuted text-textPrimary ${error ? 'border-red-300 focus:border-red-400 focus:ring-red-100/50' : ''} ${className}`}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 ml-1">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
