import React, { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = ''
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    onClick();
  };

  const baseClasses = `
    relative overflow-hidden font-semibold text-lg transition-all duration-300 transform
    ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:scale-105 active:scale-95'}
    ${isPressed ? 'scale-95' : ''}
  `;

  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl'
    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 shadow-md hover:shadow-lg';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled}
    >
      {children}
      
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </button>
  );
};