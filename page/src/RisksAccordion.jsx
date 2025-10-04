import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const RiskAccordion = () => {
  return (
    <div className="font-roboto ">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Economic losses
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          The repair of buildings, streets, pipes, and public utility networks
          generates high expenses. In turn, the value of affected homes and land
          drops drastically.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="!text-xl">
            Differential settlement
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Different areas of the same ground sink at different rates, deforming
          rigid structures such as walls and columns, which causes cracks and
          torsion.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" className="!text-xl">
            Crack and fissures in the ground
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pavement roads and hard surfaces fracture, compromising safety and
          allowing for further water infiltration.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Structure desalignment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Power lines are strained, railways may experience derailments, and
          underground pipelines break, leading to leaks or service
          interruptions.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Transport interruptions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Roads and streets bend or deform, making safe transit difficult and
          affecting urban mobility.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Sudden collapses.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          When the ground suddenly loses support, it can collapse, causing
          sudden and dangerous subsidence.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Increased Flood Risk
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Subsidence creates depressions where water accumulates. Additionally,
          canals and drainage systems lose their slope, reducing the velocity of
          runoff.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Alteration of hydrology
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Changes in the ground level can flood wetlands or, conversely, dry out
          fertile areas by modifying the natural flow of water.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="!text-xl">
            Relocation of communities
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          In more severe cases, where the situation is not addressed in time,
          the surface can sink several meters, making certain areas
          uninhabitable. This forces the population to be displaced and
          generates economic and social losses that are difficult to reverse.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
