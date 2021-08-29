import React, { useState } from 'react';

import './buttons.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element,
  variant?: 'social' | 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ icon, children, variant, ...props }) => {
  const [press, setPress] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  function handleClick(event: any) {
    let position = {
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    }
    setClickPosition(position);
    setPress(true);
  }

  function handleDespressed() {
    setTimeout(() => setPress(false), 200)
  }

  return (
    <button
      className={'button ' + variant}
      onMouseDown={handleClick}
      onMouseUp={handleDespressed}
      onMouseLeave={handleDespressed}
      {...props}
    >
      {icon && icon}
      {children}
      {press &&
        <div
          className='pressEffectrapper'
          style={{
            top: clickPosition.y - 140,
            left: clickPosition.x - 140
          }}
        >
          <div className='pressEfect' />
        </div>
      }
    </button>
  );
}
