import React from 'react';
import '../../styles/tailwind.css';
import { InputProps } from './input_type';

const Input = ({ typeInput, onChange, value }: InputProps) => {
  //---------------------
  // RENDER
  //---------------------
  return (
    <div>
      <input
        type={typeInput}
        value={value}
        placeholder="Search Something!"
        className="w-full h-[40px] p-2 border-[1px] border-gray-300 outline-none rounded-[10px]"
        onChange={(event) => onChange && onChange(event)}
      />
    </div>
  );
};

export default Input;
