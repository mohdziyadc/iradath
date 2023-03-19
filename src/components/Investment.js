import Image from "next/image";
import InvestmentImage from "../../public/18985.jpg";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function Investment() {
  const [expanded, setExpanded] = useState(false);

  const accordionConfig = {
    expanded: {
      bgColor: "bg-[#]",
    },
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center h-full  items-center">
        <div className="flex-1 h-full flex items-center drop-shadow-lg justify-center">
          <div className=" m-4  rounded-xl">
            <Image src={InvestmentImage} className="rounded-xl" />
          </div>
        </div>

        <div className="flex-1 h-full flex flex-col justify-center items-center ">
          <div className="md:text-3xl flex-col text-2xl flex-1 flex justify-center items-center font-semibold font-roboto text-[#12164d]">
            ETHICAL INVESTMENTS 😇
            <div className="text-[#808080] md:text-xl text-lg font-roboto font-light md:w-[60%] w-[80%] text-center">
              We only engage in ethical investments. Check out our philosphies.
            </div>
          </div>
          <div className="flex-[2] py-5 px-2 drop-shadow-md">
            <Accordion
              sx={{
                padding: 1,
                margin: 1,
                background: expanded === "panel1" ? "#72E485" : "#ffffff",
                borderRadius: 2,
              }}
              expanded={expanded === "panel1"}
              onChange={handleAccordionChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#12164d" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="md:text-lg text-base uppercase font-roboto font-semibold text-[#12164d]">
                  Investment Philosophy
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="md:text-lg">
                    We do not deal in certain prohibited industries. This
                    philosophy is based on the Shariah requirements.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: 1,
                margin: 1,
                background: expanded === "panel2" ? "#72E485" : "#ffffff",
                borderRadius: 2,
              }}
              expanded={expanded === "panel2"}
              onChange={handleAccordionChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#12164d" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="md:text-lg text-base font-semibold uppercase font-roboto text-[#12164d]">
                  Interest
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="md:text-lg">
                    The first and foremost amongst the industries in which we do
                    not deal is 'interest-based investments'.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: 1,
                margin: 1,
                background: expanded === "panel3" ? "#72E485" : "#ffffff",
                borderRadius: 2,
              }}
              expanded={expanded === "panel3"}
              onChange={handleAccordionChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#12164d" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="md:text-lg text-base font-semibold uppercase font-roboto text-[#12164d]">
                  Liqour
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="md:text-lg">
                    Investments in liquor companies are a strict no at Iradath
                    Investments. Ethically speaking, alcohol has been a scourge
                    of human society since time immemorial.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: 1,
                margin: 1,
                background: expanded === "panel4" ? "#72E485" : "#ffffff",
                borderRadius: 2,
              }}
              expanded={expanded === "panel4"}
              onChange={handleAccordionChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#12164d" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="md:text-lg text-base font-semibold uppercase font-roboto text-[#12164d]">
                  Tobacco
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="md:text-lg">
                    We do not deal with companies who are involved in the
                    tobacco business.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
