import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
    padding: 10px 0;
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
const Input = styled.input`
    border: 2px solid #bd93f9;
    width: 440px;
    border-radius: 5px;
    padding: 5px;
    height: 25px;
`;
const ListItemInputWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`;
const ListItemInput = styled.input`
    width: 30px;
    height: 30px;
    margin-right: 20px;
`;
const BtnWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 15px;
`;
export interface IPropTodo {
    id: string;
    title: string;
    completed: boolean;
    onRemoveTodo: (e: string) => void;
    onCompleted: (id: string) => void;
    onSaveTodo: (e: React.FormEvent, id: string, text: string) => void;
    edit: boolean;
    setEdit: Dispatch<SetStateAction<boolean>>;
}
const TodoItem: React.FC<IPropTodo> = ({ title, id, completed, onRemoveTodo, onCompleted, onSaveTodo }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(title);

    const editTodo = () => {
        setEdit(prevState => !prevState);
        setText(title);
    };
    const saveTodo = (e: React.FormEvent, id: string) => {
        onSaveTodo(e, id, text);
        setEdit(prevState => !prevState);
    };
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    return (
        <ListItem>
            {edit ? (
                <form>
                    <Input type='text' style={{ width: '150px' }} value={text} onChange={handleInput} />
                    <div>
                        <BtnWrapper>
                            <Button onClick={editTodo}>Cancel</Button>
                            <Button onClick={e => saveTodo(e, id)}>Save</Button>
                        </BtnWrapper>
                    </div>
                </form>
            ) : (
                <>
                    <ListItemInputWrapper>
                        <ListItemInput type='checkbox' checked={completed} onChange={() => onCompleted(id)} />
                        <label htmlFor='task'>{title}</label>
                    </ListItemInputWrapper>
                    <BtnWrapper>
                        <Button onClick={editTodo}>Edit</Button>
                        <Button onClick={() => onRemoveTodo(id)}>Delete</Button>
                    </BtnWrapper>
                </>
            )}
        </ListItem>
    );
};

export default TodoItem;
