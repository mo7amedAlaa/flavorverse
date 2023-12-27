import React from 'react';

const Button = ({
  isDisabled,
  btnType,
  containerStyle,
  textStyle,
  rightIcon,
  handleClick,
  title,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      className={`custom-btn ${containerStyle}`}
      type={btnType || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && <div className="relative h-6 w-6 ">{rightIcon}</div>}
    </button>
  );
};

export default Button;
