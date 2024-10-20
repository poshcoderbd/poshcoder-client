import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { Fade } from "react-awesome-reveal";
import "./AskedQ.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AskedQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="askedq">
      <div className="left">
        <h2>
          ASKED{" "}
          <span>
            <Fade cascade damping={0.1} triggerOnce>
              QUESTIONS
            </Fade>{" "}
          </span>
        </h2>
      </div>
      <div className="right">
        <div>
          <Accordion
            sx={{ backgroundColor: "#17181a", color: "white" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ fontSize: "1.3rem", fontWeight: "300" }}>
                What's the process for working with your agency on a branding
                project?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "rgb(199, 199, 199)" }}>
                Our process typically starts with in-depth discussions to
                understand your business goals and vision. We then create a
                tailored strategy, develop design concepts, gather feedback, and
                refine until we achieve a final result that aligns with your
                brand's identity.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#17181a", color: "white" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography sx={{ fontSize: "1.3rem", fontWeight: "300" }}>
                How long does a branding project usually take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "rgb(199, 199, 199)" }}>
                The timeline varies depending on the complexity of the project.
                A Web Development might take a few weeks, while a comprehensive
                brand identity project could take a months.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#17181a", color: "white" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography sx={{ fontSize: "1.3rem", fontWeight: "300" }}>
                How do I get started with a branding project?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "rgb(199, 199, 199)" }}>
                To get started, simply reach out to us through our contact page,
                and we'll schedule a consultation to discuss your needs and
                explore how we can help you achieve your branding goals.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#17181a", color: "white" }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography sx={{ fontSize: "1.3rem", fontWeight: "300" }}>
                What sets your agency apart from other branding agencies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "rgb(199, 199, 199)" }}>
                Our agency prides itself on a combination of creativity,
                strategic thinking, and attention to detail. We focus on
                creating unique and memorable brand experiences that resonate
                with audiences.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AskedQ;
