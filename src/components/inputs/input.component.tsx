import React from 'react';

import './inputs.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const Input: React.FC<InputProps> = ({...props}) => {
return (
  <input className='input' {...props} />
);
}