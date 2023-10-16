import {
  Box,
  Fab,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTodo} from "../store/todosSlice";
import {yellow, red, green} from "@mui/material/colors";

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  const {id, value, status} = todo;

  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  // Todo value change
  const handleEditValue = (e) => {
    if (e.code === "Enter") {
      dispatch(updateTodo({id, value: editValue}));
      setIsEditable(false);
    }
  };

  // status value change
  const handleChangeStatus = (e) => {
    const {value: status} = e.target;
    dispatch(updateTodo({id, status}));
  };

  const statusType = {
    pending: {value: "pending", color: yellow[100], label: "pending"},
    process: {value: "process", color: yellow[900], label: "process"},
    complete: {value: "complete", color: green[100], label: "complete"},
    cancel: {value: "cancel", color: red[100], label: "cancel"},
  };

  return (
    <Paper
      key={id}
      variant="outlined"
      sx={{
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: isEditable ? "end" : "space-between",
        flexWrap: "wrap",
        bgcolor: statusType[status].color,
      }}>
      {isEditable ? (
        <>
          <TextField
            value={editValue}
            fullWidth
            onChange={(e) => {
              const value = e.target.value;
              setEditValue(value);
            }}
            onKeyDown={handleEditValue}
          />
          <Typography sx={{mr: 2, color: red[500]}}>
            Make Sure Edit Will be pressed by Enter key.
          </Typography>
        </>
      ) : (
        <Typography>{value}</Typography>
      )}

      <Box>
        <Select
          size="small"
          value={status}
          label="Status"
          onChange={handleChangeStatus}
          sx={{mr: 1}}>
          {Object.entries(statusType).map((status) => {
            const {value, label} = status[1];

            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
        <Fab
          onClick={handleEdit}
          size="small"
          color="secondary"
          aria-label="edit">
          <EditIcon />
        </Fab>
      </Box>
    </Paper>
  );
};

export default Todo;
