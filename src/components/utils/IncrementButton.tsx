import React from 'react';
import Button from './Button';

type IncrementButtonProps = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const IncrementButton = ({ total, setTotal }: IncrementButtonProps) => {
  return (
    <Button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</Button>
  );
};

export default IncrementButton;
