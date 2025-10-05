import { useState } from "react";
import { Tabs, Tab, Box, Typography, Paper, Container } from "@mui/material";
import ReactBeforeSliderComponent from "react-before-after-slider-component";

const firstImage = {
  imageUrl: "/SinColorPhase.jpg",
};

const secondImage = {
  imageUrl: "/ConColorPhase.jpg",
};

export const SliderSAR = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className="flex flex-col m-4 justify-center items-center">
        <div className="w-2/3 ">
          <ReactBeforeSliderComponent
            firstImage={firstImage}
            secondImage={secondImage}
            delimiterColor="#fff"
            currentPercentPosition={20}
            withResizeFeel={true}
          />
        </div>
        <Typography className="mt-4 text-gray-700">Phase Unwrapping</Typography>
      </div>

      <Paper
        elevation={3}
        sx={{
          maxWidth: "800px",
          margin: "2rem auto",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          sx={{ bgcolor: "grey.200" }}
        >
          <Tab label="General" />
          <Tab label="Detailed" />
        </Tabs>

        {/* Contenido segun pestaña */}
        <Box sx={{ p: 3 }}>
          {value === 0 && (
            <>
              <Typography variant="body1">
                For this challenge, we use a Synthetic Aperture Radar (SAR),
                which obtains images by emitting pulses toward the Earth and
                recording the energy that is reflected back after these signals
                interact with it.
              </Typography>
              <Typography className="pt-4">
                SAR is an active sensor that works with microwaves, measuring
                the amplitude and phase of the backscattered signal. InSAR
                (Interferometric Synthetic Aperture Radar) is a remote sensing
                technique that uses the phase information from SAR images to
                obtain deformation maps of the Earth's surface.
              </Typography>
            </>
          )}
          {value === 1 && (
            <>
              <Typography variant="body1">
                In this case, the input parameters that were used to acquire
                measurements with SAR were: the wavelength, C-band (5 cm), VV
                polarization, and the incidence angle, which is not fixed but
                varies from 20° to 45°. In the images obtained by radar, each
                pixel represents a complex value for the energy reflected back
                to the satellite. The magnitude of each pixel represents the
                intensity of the backscattered signal.
              </Typography>
              <Typography className="pt-4">
                The radar's phase is a measure of the total distance between the
                sensor and all the objects within a pixel. In interferometry,
                the phase difference is measured between two images acquired
                over the same area but on different dates; this difference
                allows for the extraction of information about changes in
                distance (topography, deformation, subsidence, etc.).
              </Typography>
              <Typography className="pt-4">
                When a stack of SAR images is available, there is a technique
                called DInSAR (Differential Interferometric SAR). With this, it
                is possible to estimate the deformation of the Earth's surface
                with millimeter-level precision by mitigating inherent
                decorrelation noise and applying atmospheric filters, in order
                to obtain velocity maps and displacement time-series.
              </Typography>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
