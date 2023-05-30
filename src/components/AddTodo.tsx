import React, { useState } from 'react';
import styled from 'styled-components';
const Input = styled.input`
    border: 2px solid #bd93f9;
    width: 440px;
    border-radius: 5px;
    padding: 5px;
    height: 25px;
`;
const Button = styled.button`
    color: inherit;
    border-radius: 10px;
    border: 2px solid #bd93f9;
    background: #282a36;
    padding: 5px;
    width: 80px;
    height: 38px;
    cursor: pointer;
`;
const FlexBlock = styled.div`
    display: flex;
`;
interface IProp {
    onAddTodo: (e: React.FormEvent, item: string) => void;
}
const AddTodo: React.FC<IProp> = ({ onAddTodo }) => {
    const [input, setInput] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    return (
        <form>
            <FlexBlock style={{ justifyContent: 'space-between' }}>
                <Input type='text' placeholder='New todo...' value={input} onChange={handleInputChange} />
                <Button onClick={e => onAddTodo(e, input)}>Add</Button>
            </FlexBlock>
        </form>
    );
};

export default AddTodo;
