import { CircularProgress, Box } from "@mui/material";

const SuspenseFallback = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CircularProgress />
    </Box>
  );
};

export default SuspenseFallback;
// This component is used as a fallback UI while the main content is loading.