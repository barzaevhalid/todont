import React from 'react';

type PropType = { todo: number };
const Counter: React.FC<PropType> = ({ todo }) => {
    return <div>{todo} Tasks remaining</div>;
};

export default Counter;
