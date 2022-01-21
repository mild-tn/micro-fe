import React, { ReactChild } from 'react';
import { PrimaryProps } from './button_type';
import '../../styles/tailwind.css';

const Primary = ({ children, onClick }: PrimaryProps) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className="min-h-[48px] w-[130px] px-10 bg-red-800 rounded"
    >
      {children}
    </button>
  );
};

export default Primary;
