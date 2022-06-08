import { IconButton, TableCell, TableRow } from "@mui/material";
import {
  Check,
  Clear,
  Notifications as Toggle,
  Delete,
} from "@mui/icons-material";

function Todo({ name, done, onToggle, onDelete }) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{done ? <Check /> : <Clear />}</TableCell>
      <TableCell>
        <IconButton onClick={() => onToggle(name)}>
          <Toggle />
        </IconButton>

        <IconButton onClick={() => onDelete(name)}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default Todo;
