import {Paper, Typography} from "@mui/material";

const Todo = ({todo}) => {
  const {id, value} = todo;
  return (
    <Paper key={id} variant="outlined" sx={{p: 1}}>
      <Typography>{value}</Typography>
    </Paper>
  );
};

export default Todo;
