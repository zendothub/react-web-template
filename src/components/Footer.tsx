import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: "center", bgcolor: "background.paper" }}>
      <Typography variant="body2">© {new Date().getFullYear()} ToDo App</Typography>
    </Box>
  );
};

export default Footer;
