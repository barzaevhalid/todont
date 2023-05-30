import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
`;
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
const ListHeading = styled.h2``;
const List = styled.div`
    padding: 0 10px 0 10px;
`;
const ListItem = styled.div`
    padding: 10px 0;
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
const ListItemBtnWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 15px;
`;
const Todo = () => {
    return (
        <div>
            <h1>
                <Title>Todont</Title>
            </h1>
            <form>
                <FlexBlock style={{ justifyContent: 'space-between' }}>
                    <Input type='text' placeholder='New todo...' />
                    <Button>Add</Button>
                </FlexBlock>
            </form>
            <FlexBlock style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                <Button style={{ width: '170px' }}>Show all tasks</Button>
                <Button style={{ width: '170px' }}>Show Active tasks</Button>
                <Button style={{ width: '170px' }}>Show Completed tasks</Button>
            </FlexBlock>
            <ListHeading>3 Tasks remaining</ListHeading>
            <List>
                <ListItem>
                    <form>
                        <Input type='text' style={{ width: '150px' }} />
                    </form>
                    <ListItemInputWrapper>
                        <ListItemInput type='checkbox' />
                        <label htmlFor='task'>12</label>
                    </ListItemInputWrapper>
                    <ListItemBtnWrapper>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </ListItemBtnWrapper>
                </ListItem>
            </List>
        </div>
    );
};

export default Todo;
