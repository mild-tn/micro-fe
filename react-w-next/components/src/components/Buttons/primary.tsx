import React, { ReactChild } from 'react';

interface PrimaryProps {
  children?: ReactChild;
}

const Primary = ({ children }: PrimaryProps) => {
  return (
    <button className="h-[48px] w-[130px] px-10 bg-red-500 rounded">
      {children}
      <p className="text-lg text-blue-500">Mild</p>
      <p className="text-lg text-red-900">Hello</p>
    </button>
  );
};

export default Primary;
