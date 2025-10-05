import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-scroll";
import nasaLogo from "/logoNasa.jpg";

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
        <AppBar className="!bg-white !sticky !text-black">
          <Toolbar className="flex justify-between">
            <div className="flex gap-4 items-center">
              <img src={nasaLogo} className="h-12" />
              <Typography variant="h6" component="div">
                Floor Subsidence
              </Typography>
            </div>

            <div className="gap-4 hidden sm:flex">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer "
                  spy={true}
                  activeClass="underline"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
