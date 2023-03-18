import React from 'react';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={
        'text-[var(--white)] bg-[var(--dark)] rounded-[5px] ' + props.className
      }
    >
      {props.text}
    </button>
  );
};

export default Button;
