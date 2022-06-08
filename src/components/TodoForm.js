import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function TodoForm({ onSubmit }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setName("");
    onSubmit(name);
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ mb: ".5em" }}>
          Add Todo
        </Typography>

        <form onSubmit={handleSubmit} method="post">
          <TextField
            label="Name"
            value={name}
            fullWidth
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <Button type="submit" fullWidth>
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default TodoForm;
