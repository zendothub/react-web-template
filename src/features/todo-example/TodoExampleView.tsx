import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Paper, Typography } from '@mui/material';
import { useToDoExample } from "./TodoExampleViewModel";

interface ToDo {
  todo: string;
}

export default function ToDoExampleView() {

  const { data, error, isPending } = useToDoExample();

    const todosData = data?.data?.todos;
    console.log(todosData);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h5" component="h1" gutterBottom sx={{ textAlign: "center", marginTop: 5 }}>
          ToDo Example
        </Typography>
        {isPending ? (
          <Typography variant="body1">Loading ToDo Examples with lazy loading...</Typography>
        ) : error ? (
          <Typography variant="body1" color="error">
            Failed to load quote. {(error as Error).message}
          </Typography>
        ) : ( todosData.map((todo: ToDo, index: number) => (
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }} key={index}>
            {todo.todo}
          </Paper>
        )))}
      </Container>
    </React.Fragment>
  );
}
