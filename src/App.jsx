import {Container, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Todo from "./components/Todo";
import {addTodo} from "./store/todosSlice";
import AddTodo from "./components/AddTodo";
function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTodo(data.todo));
  };

  return (
    <>
      <Container>
        <Typography variant="h3" textAlign="center" sx={{marginY: "2rem"}}>
          Todo Using Redux
        </Typography>

        <AddTodo onSubmit={onSubmit} />

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
