import React, { useEffect, useMemo, useState } from 'react';
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
interface todoType {
    id: string;
    title: string;
    completed: boolean;
}
const Todo = () => {
    const [todo, setTodo] = useState<todoType[]>([]);
    const [edit, setEdit] = useState(false);
    const [filter, setFilter] = useState('all');
    const onRemoveTodo = (id: string) => {
        setTodo(prevState => prevState.filter(todo => todo.id !== id));
    };

    const filteredTasks = useMemo(() => {
        return todo.filter(task => {
            switch (filter) {
                case 'all':
                    return true;
                case 'completed':
                    return task.completed;
                case 'incomplete':
                    return !task.completed;
                default:
                    return true;
            }
        });
    }, [filter, todo]);
    const handleFilterAll = () => {
        setFilter('all');
    };

    const handleFilterCompleted = () => {
        setFilter('completed');
    };

    const handleFilterIncomplete = () => {
        setFilter('incomplete');
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
    useEffect(() => {
        if (!localStorage.getItem('todos')) {
            setTodo(todos);
        } else {
            const local = localStorage.getItem('todos');
            if (local) {
                setTodo(JSON.parse(local));
            }
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo]);
    return (
        <div>
            <Title>Todo</Title>
            <AddTodo onAddTodo={onAddTodo} />
            <FlexBlock style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                <Button
                    style={{ width: '170px', background: filter === 'all' ? ' #bd93f9' : '' }}
                    onClick={handleFilterAll}
                >
                    Show All tasks
                </Button>
                <Button
                    style={{ width: '170px', background: filter === 'incomplete' ? ' #bd93f9' : '' }}
                    onClick={handleFilterIncomplete}
                >
                    Show Active tasks
                </Button>
                <Button
                    style={{ width: '170px', background: filter === 'completed' ? ' #bd93f9' : '' }}
                    onClick={handleFilterCompleted}
                >
                    Show Completed tasks
                </Button>
            </FlexBlock>
            <ListHeading>
                <Counter todo={todo.length} />
            </ListHeading>
            <List>
                {filteredTasks.map(item => (
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
