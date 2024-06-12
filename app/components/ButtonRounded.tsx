import React, { ReactNode } from 'react';

interface ButtonRoundedProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  notbtn?: boolean;
  disabled?:boolean
}

const ButtonRounded: React.FC<ButtonRoundedProps> = ({ text, icon, className = "", onClick, notbtn = false,disabled }) => {
  const baseClasses = "px-4 py-2 flex items-center text-sm gap-2 justify-between rounded-xl bg-1 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-500 transition-colors duration-200";

  if (notbtn) {
    return (
      <div onClick={onClick} className={`${baseClasses} ${className}`}>
        {text}
        {icon}
      </div>
    );
  }

  return (
    <button disabled={disabled} onClick={onClick} className={`${baseClasses} ${className}`}>
      {text}
      {icon}
    </button>
  );
};

export default ButtonRounded;
