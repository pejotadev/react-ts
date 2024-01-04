import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  labelId: string;
};

const Input = ({ label, labelId, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={labelId}>{label}</label>
      <input 
        id={labelId} 
        name={labelId} 
        type="text" 
        {...props}
      />
    </div>
  );
};

export default Input;
