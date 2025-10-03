import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-scroll";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export const Header = ({ children, sections }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className="!bg-gray-700 !sticky">
          <Toolbar className="flex justify-between">
            <Typography variant="h6" component="div">
              Hundimiento del suelo - Mendoza
            </Typography>
            <div className="flex gap-4">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container>
        <Box>{children}</Box>
      </Container>
    </React.Fragment>
  );
};
