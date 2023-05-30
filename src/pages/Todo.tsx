import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';

import { todos } from '../todo.model';

import TodoItem from '../components/TodoItem';
import Counter from '../components/Counter';
import AddTodo from '../components/AddTodo';

const Title = styled.h1`
    text-align: center;
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
const ListHeading = styled.h2``;
const List = styled.div`
    padding: 0 10px 0 10px;
`;

const Todo = () => {
    const [todo, setTodo] = useState(todos);
    const [edit, setEdit] = useState(false);

    const onRemoveTodo = (id: string) => {
        setTodo(prevState => prevState.filter(todo => todo.id !== id));
    };
    const onAddTodo = (e: React.FormEvent, item: string) => {
        e.preventDefault();
        if (item) {
            setTodo(prevState => [...prevState, { id: uuidv4(), title: item, completed: false }]);
        }
    };

    const onCompleted = (id: string) => {
        const newTodos = todo.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodo(newTodos);
    };
    const onSaveTodo = (e: React.FormEvent, id: string, text: string) => {
        e.preventDefault();
        const newTodos = todo.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: text };
            }
            return todo;
        });
        setTodo(newTodos);
    };
    console.log(todo);
    const showAllTasks = () => {};
    const showActiveTasks = () => {};
    const showCompletedTasks = () => {};
    return (
        <div>
            <Title>Todont</Title>
            <AddTodo onAddTodo={onAddTodo} />
            <FlexBlock style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                <Button style={{ width: '170px' }}>Show all tasks</Button>
                <Button style={{ width: '170px' }}>Show Active tasks</Button>
                <Button style={{ width: '170px' }}>Show Completed tasks</Button>
            </FlexBlock>
            <ListHeading>
                <Counter todo={todo.length} />
            </ListHeading>
            <List>
                {todo.map(item => (
                    <TodoItem
                        key={item.id}
                        edit={edit}
                        setEdit={setEdit}
                        {...item}
                        onSaveTodo={onSaveTodo}
                        onRemoveTodo={onRemoveTodo}
                        onCompleted={onCompleted}
                    />
                ))}
            </List>
        </div>
    );
};

export default Todo;
