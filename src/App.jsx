import {Container, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import AddTodo from "./components/AddTodo";
import ShowTodos from "./components/ShowTodos";

function App() {
  const todos = useSelector((state) => state.todos);

  const filteredTodos = {
    all: todos,
    pendingProcess: todos.filter(
      (todo) => todo.status != "complete" && todo.status != "cancel"
    ),
    complete: todos.filter((todo) => todo.status == "complete"),
    cancel: todos.filter((todo) => todo.status == "cancel"),
  };

  return (
    <>
      <Container>
        <Typography variant="h3" textAlign="center" sx={{marginY: "2rem"}}>
          Todo Using Redux
        </Typography>

        <AddTodo />

        <ShowTodos
          title="Please Complete Your Task"
          todos={filteredTodos.pendingProcess}
        />

        <ShowTodos title="Completed Task" todos={filteredTodos.complete} />

        <ShowTodos title="Cancel Task" todos={filteredTodos.cancel} />
      </Container>
    </>
  );
}

export default App;
