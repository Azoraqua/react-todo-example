import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@mui/material";

import Todo from "./Todo";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell variant="head">Status</TableCell>
            <TableCell variant="head">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {todos.length > 0 && (
              [...todos].map((todo) => (
                <Todo key={todo.name} name={todo.name} done={todo.done} onToggle={toggleTodo} onDelete={removeTodo} />
              )
          )) || (
              <TableRow>
                  <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                    <Typography>Nothing to do yet.</Typography>
                  </TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TodoList;
