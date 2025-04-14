import { useToDoStore } from "./TodoViewModel";
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useQuoteOfTheDay } from './TodoViewModel'

export default function Home() {
  const [ input, setInput ] = useState("");
  const { todos, addToDo, deleteToDo } = useToDoStore();
  const queryClient = useQueryClient();

  // Fetch the quote of the day
  const { data, error, isPending } = useQuoteOfTheDay();
  
  const quoteData = data?.data[0];

  console.log('quoteData', quoteData);
  console.log('error', error);
  console.log('isPending', isPending);

  const handleAddTodo = () => {
    setInput("");
    if (!input.trim()) return; // Prevent adding empty todos
    addToDo(input)
  }

  const handleAPICache = () => {
    queryClient.clear()
  }

  const handleStateCache = () => {
    useToDoStore.persist.clearStorage();
    window.location.reload();
  }

  return (
    <Container sx={{ textAlign: "center", py: 5, width:{xs: "80%", sm: "70%" }, height: "100%", border: "1px solid", borderColor: "border.main", borderRadius: "20px", backgroundColor: "background.paper" }}>
      {/* Display the quote of the day */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Quote of the Day:
        </Typography>
        {isPending ? (
          <Typography variant="body1">Loading quote...</Typography>
        ) : error ? (
          <Typography variant="body1" color="error">
            Failed to load quote. {error.message}
          </Typography>
        ) : (
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            "{quoteData?.q ?? 'No quote available'}" - {quoteData?.a ?? 'Unknown'}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Add a new task"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
      </Box>
      <List>
        {todos.map((todo, index) => (
          <Box
          key={index}
          sx={{
            mb: 1,
            border: "1px solid",
            borderColor: "secondary.main", // Use theme's border color
            borderRadius: "10px",
            backgroundColor: "secondary.main", // Use theme's background color
            padding: "10px",
          }}
        >
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteToDo(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={todo} />
            </ListItem>
          </Box>
        ))}
      </List>
      <Button variant="contained" sx={{m:1}} color="primary" onClick={handleAPICache}>
        Remove API Cache
      </Button>
      <Button variant="contained" sx={{m:1}} color="primary" onClick={handleStateCache}>
        Remove State Cache
      </Button>
    </Container>
  );
}
