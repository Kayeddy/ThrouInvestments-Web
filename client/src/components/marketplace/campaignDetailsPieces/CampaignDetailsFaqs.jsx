import React, { useState } from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    divider: "rgba(0, 0, 0, 0.12)", // you can customize this color
  },
});

const CampaignDetailsFaqs = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `${theme.palette.divider}`,
    background: "transparent",
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
        <ArrowForwardIosSharpIcon
          sx={{
            fontSize: "2rem",
            fontWeight: "80px",
            transform: "rotate(-90deg)",
          }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: "20px",
    position: "relative",
    alignItems: "center",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
      color: "#18A5FF",
      transition: "",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "#062147",
      transition: "",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: 0,
      flexGrow: 1,
    },
    "&:not(.Mui-expanded)": {
      borderBottom: "1.5px solid #062147",
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderBottom: "1.5px solid #18A5FF",
    marginBottom: "20px",
  }));

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                <p
                  className={`text-[20px] font-bold font-jakarta ${
                    expanded === "panel1" && "text-[#18A5FF]"
                  }`}
                >
                  ¿Qúe es Dakota Green?
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[18px] font-jakarta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                <p
                  className={`text-[20px] font-bold font-jakarta ${
                    expanded === "panel2" && "text-[#18A5FF]"
                  }`}
                >
                  ¿Dónde está ubicado Dakota Green?
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[18px] font-jakarta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                <p
                  className={`text-[20px] font-bold font-jakarta ${
                    expanded === "panel3" && "text-[#18A5FF]"
                  }`}
                >
                  ¿Cómo invertir en Dakota Green?
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[18px] font-jakarta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CampaignDetailsFaqs;
