"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";
import { faqs } from "@/fixtures/faqs";
import JoinCommunity from "@/components/JoinCommunity";
import Footer from "@/components/footer";


const FaqPage = () => {
  return (
    <>
      <section
        aria-describedby="frequesly asked questions"
        className="container-padding-x container-padding-y"
      >
        <h2 className="text-[1.35rem] md:text-[1.75rem] font-bold mb-6 text-center">
          FAQ
        </h2>
        <div className="w-full max-w-3xl mx-auto mt-4 md:mt-8">
          <Faqs />
        </div>
      </section>
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default FaqPage;


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  margin: "0.5rem 0",
  "&:not(:last-child)": {
    borderBottom: 1,
  },
  "&:before": {
    display: "none",
  },
}));

function Faqs() {
  const [expanded, setExpanded] = React.useState<string[]>(["panel-0"]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded((state) => {
        if (newExpanded) {
          return [...state, panel];
        } else {
          const _state = [...state];
          const index = _state.indexOf(panel);
          _state.splice(index, 1);
          return _state;
        }
      });
    };

  return (
    <div className="border max-w-[750px] mx-auto p-16 rounded-xl">
      {faqs.map((item, id) => (
        <div className="border-b" key={id}>
          <Accordion
            expanded={expanded.indexOf(`panel-${id}`) !== -1}
            onChange={handleChange(`panel-${id}`)}
            key={id}
          >
            <AccordionSummary>
              <h3 className="text-[1rem] md:text-[22px] font-[500] max-w-[520px]">
                {item.title}
              </h3>

              <div className="ml-auto">
                <Image
                  src="/assets/icons/drop-down.svg"
                  width={30}
                  height={30}
                  alt="dropdown"
                  className={`${expanded.indexOf(`panel-${id}`) !== -1
                      ? "rotate-180"
                      : "rotate-0"
                    } transition-[transform] ease-in-out duration-200 `}
                />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                aria-describedby="accordion body"
                className="px-6 text-lg text-g-700"
              >
                <p>{item.body}</p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
