import {Container, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <Container>
        <Typography variant="h3" textAlign="center" sx={{marginY: "2rem"}}>
          Todo Using Redux
        </Typography>

        <AddTodo />

        <Stack direction="column" spacing={2} sx={{mt: 4}}>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default App;
