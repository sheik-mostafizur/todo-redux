import {Alert, Fab, Stack, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useForm} from "react-hook-form";

const AddTodo = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{maxWidth: "700px", mx: "auto"}}>
        <TextField
          id="standard-basic"
          label="Add A Todo"
          variant="standard"
          fullWidth
          {...register("todo", {required: "Please Enter A Todo!"})}
        />

        <Fab type="submit" size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Stack>
      {errors.todo && (
        <Alert severity="error" sx={{maxWidth: "700px", mx: "auto"}}>
          {errors.todo.message}
        </Alert>
      )}
    </form>
  );
};

export default AddTodo;
