import {Box, Stack, Typography} from "@mui/material";
import Todo from "./Todo";

const ShowTodos = ({title, todos}) => {
  if (todos.length <= 0) return null;

  return (
    <Box>
      <Typography variant="h4" my={4}>
        {title}
      </Typography>
      <Stack direction="column" spacing={2}>
        {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </Stack>
    </Box>
  );
};

export default ShowTodos;
