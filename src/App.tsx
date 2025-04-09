import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import {
  Box, CssBaseline, Typography, List, ListItem, ListItemButton,
  ListItemText, Button, Chip, Stack
} from '@mui/material';
import ProjectForm from './components/ProjectForm';
import { Project } from './types';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
      } as Project));
      setProjects(projectsData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <Box sx={{ width: 280, bgcolor: 'background.paper', borderRight: '1px solid #eee', p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Projects</Typography>
          <Button variant="contained" fullWidth onClick={() => setOpenForm(true)}>
            Add Project
          </Button>
          <List>
            {projects.map(project => (
              <ListItem key={project.id} disablePadding>
                <ListItemButton
                  selected={selectedProject?.id === project.id}
                  onClick={() => setSelectedProject(project)}
                  sx={{ borderLeft: `4px solid ${project.color}` }}
                >
                  <ListItemText
                    primary={project.name}
                    secondary={
                      <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                        <Chip label={project.status} size="small" />
                        <Chip label={project.priority} size="small" />
                      </Stack>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {selectedProject ? (
            <Box>
              <Typography variant="h4">{selectedProject.name}</Typography>
              <Typography>{selectedProject.description}</Typography>
            </Box>
          ) : (
            <Typography>Select a project</Typography>
          )}
        </Box>
      </Box>

      <ProjectForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={(project) => console.log(project)}
      />
    </>
  );
}

export default App;
