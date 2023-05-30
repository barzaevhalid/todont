import React from 'react';
import { Container } from '@mui/material';
import Todo from './pages/Todo';
const App = () => {
    return (
        <Container maxWidth='sm'>
            <Todo />
        </Container>
    );
};

export default App;
