import { Box, CssBaseline, Typography } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 250,
            bgcolor: "background.paper",
            borderRight: "1px solid #eee",
            p: 2,
          }}
        >
          <Typography variant="h6">Projects</Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4">Select a project</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
