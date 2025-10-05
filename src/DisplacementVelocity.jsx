import { Typography, Container } from "@mui/material";
import velocityImg from "/displacement_velocity.jpg";
import predictionImg from "/prediction.png";
import displacementImg from "/displacement_zones.jpg";

export const DisplacementVelocity = () => {
  return (
    <Container>
      <div
        id="graphics"
        className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 py-4 md:py-8 space-y-4 md:space-y-0 md:space-x-4"
      >
        {/* Primera imagen */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={displacementImg}
            alt="Image 1"
            className="w-full h-64 rounded-lg border"
          />
          <Typography className="mt-2 !text-sm md:!text-base text-center">
            <div>Analyzed zones with distinct average displacements:</div>
            <div>
              <span style={{ color: "#000000", fontWeight: "bold" }}>
                Low coherence
              </span>
              , <span>not useful data</span>.
            </div>
            <div>
              <span style={{ color: "#EF233C", fontWeight: "bold" }}>
                Stable, mountain chain
              </span>
              .
            </div>
            <div>
              <span style={{ color: "#2B2D42", fontWeight: "bold" }}>
                Largest displacement
              </span>
              , <span>main area of Mendoza</span>.
            </div>
            <div className="text-gray-600">Medium displacement</div>
          </Typography>
        </div>

        {/* Segunda imagen */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={velocityImg}
            alt="Image 2"
            className="w-full h-64 rounded-lg border"
          />
          <Typography className="mt-2 !text-sm md:!text-base text-center">
            Average ground subsidence rate per year obtained from more than 150
            interferometric images.
            <br />[ -20mm to 10mm ] [ Blue to Red ]
          </Typography>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex w-1/2">
          <img
            src={predictionImg}
            alt="Image 1"
            className="w-full h-auto rounded-lg border"
          />
        </div>

        <div className="mt-2 w-1/2 !text-sm md:!text-base text-center">
          <Typography className="!mt-8 pl-4 !text-xl">
            This chart shows the historical ground subsidence in Mendoza over
            the past five years along with a projected trend for the next 30
            years. Using data from different stations, zones, and past changes,
            the model analyzes patterns in land sinking to forecast how
            subsidence may progress if current conditions continue. Gradual but
            cumulative sinking could affect buildings, roads, and other
            infrastructure over time, helping us understand potential future
            risks.
          </Typography>
        </div>
      </div>
    </Container>
  );
};
