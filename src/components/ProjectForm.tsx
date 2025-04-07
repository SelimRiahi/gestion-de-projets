import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

interface ProjectFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (project: any) => void;
}

export default function ProjectForm({
  open,
  onClose,
  onSubmit,
}: ProjectFormProps) {
  const [project, setProject] = useState({
    name: "",
    description: "",
    color: "#1976d2",
    status: "not-started",
    priority: "medium",
  });

  const handleSubmit = () => {
    onSubmit({
      ...project,
      createdAt: new Date(),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Project</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Project Name"
            fullWidth
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={project.status}
              label="Status"
              onChange={(e) =>
                setProject({ ...project, status: e.target.value })
              }
            >
              <MenuItem value="not-started">Not Started</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
