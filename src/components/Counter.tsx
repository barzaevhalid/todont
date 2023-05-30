import React, { useState } from 'react';
type todoType = {
    id: string;
    title: string;
    completed: boolean;
};
type PropType = { todo: number };
const Counter: React.FC<PropType> = ({ todo }) => {
    return <div>{todo} Tasks remaining</div>;
};

export default Counter;
