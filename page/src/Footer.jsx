import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <Box
      component="footer"
      mt={4}
      className="flex items-center justify-around text-white bg-gray-900"
      borderTop="1px solid rgba(255,255,255,0.2)"
      py={2}
    >
      <Typography variant="body2" align="center" color="grey.500">
        © {new Date().getFullYear()} Exact Sciences Students - UNICEN
      </Typography>
      <div className="flex gap-4">
        <a
          href="https://github.com/Luciano-medernach/hackaton"
          className="flex gap-1 items-center"
        >
          <IconButton sx={{ color: "white" }}>
            <GitHubIcon />
          </IconButton>
          <Typography>Web page</Typography>
        </a>

        <a
          href="https://github.com/LautaroBarraza/procesamiento-img-Nasa-SpaceApps"
          className="flex gap-1 items-center"
        >
          <IconButton sx={{ color: "white" }}>
            <GitHubIcon />
          </IconButton>
          <Typography>Data analysis</Typography>
        </a>
      </div>
    </Box>
  );
};
