import { useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { data } from "./data";

export default function App() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const renderAccordion = (sectionData) => {
    return (
      <Accordion
        allowToggle
        index={expandedSection}
      >
        {sectionData.map((item, index) => (
          <AccordionItem
            key={item.id}
            bg="#201c33"
            margin={2}
            position="relative"
            border="none"
          >
            <AccordionButton
              onClick={() => toggleExpand(index)}
              borderRadius="10"
              borderBottomRadius={expandedSection === index ? "none" : "10"}
              borderLeft={
                expandedSection === index
                  ? "1px solid #2effa9"
                  : "1px solid #4a5568"
              }
              borderRight={
                expandedSection === index
                  ? "1px solid #2effa9"
                  : "1px solid #4a5568"
              }
              borderTop={
                expandedSection === index
                  ? "1px solid #2effa9"
                  : "1px solid #4a5568"
              }
              borderBottom={
                expandedSection === index ? "" : "1px solid #4a5568"
              }
            >
              <Box
                flex="1"
                textAlign="left"
              >
                {item.title}
              </Box>
              {expandedSection === index ? (
                <FiMinus color="#2effa9" />
              ) : (
                <IoMdAdd />
              )}
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color="#a4a2ac"
              borderBottomRadius="10"
              borderLeft="1px solid #2effa9"
              borderRight="1px solid #2effa9"
              borderBottom={
                expandedSection === index
                  ? "1px solid #2effa9"
                  : "1px solid #4a5568"
              }
            >
              {item.details}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  return (
    <Center
      h="100vh"
      backgroundColor="#171923"
    >
      <Box
        bg="gray.900"
        w="100%"
        maxW="650px"
        p={8}
        color="white"
      >
        <Tabs size="md">
          <TabList
            background="linear-gradient(to right, #302b4e, #37325a)"
            border="1px"
            roundedTop="10"
            borderColor="#4a5568"
            borderBottom="none"
            display="flex"
          >
            <Tab
              paddingX="10"
              _selected={{
                color: "#3effb6",
                bg: "#201d34",
                borderColor: "#4a5568",
                borderTop: 0,
                borderBottom: "none",
                borderLeft: "none",
                borderTopStartRadius: 20,
                borderTopRightRadius: 90,
                borderBottomEndRadius: -10,
                borderBottomStartRadius: 0,
              }}
            >
              General
            </Tab>

            <Tab
              paddingX="10"
              _selected={{
                color: "#3effb6",
                bg: "#1d1931",
                borderColor: "#4a5568",
                borderTop: 0,
                borderBottom: "none",
                borderTopStartRadius: 90,
                borderTopRightRadius: 90,
                borderBottomEndRadius: -10,
                borderBottomStartRadius: 0,
              }}
            >
              Blockchain Services
            </Tab>
            <Tab
              paddingX="10"
              _selected={{
                color: "#3effb6",
                bg: "#151129",
                borderColor: "#4a5568",
                borderTop: 0,
                borderBottom: "none",
                borderTopStartRadius: 30,
                borderTopRightRadius: 30,
                borderBottomEndRadius: 0,
                borderBottomStartRadius: -30,
              }}
            >
              Setup
            </Tab>
            <Tab
              paddingX="10"
              _selected={{
                color: "#3effb6",
                bg: "#151129",
                borderColor: "#4a5568",
                borderTop: 0,
                borderBottom: "none",
                borderTopStartRadius: 30,
                borderTopRightRadius: 10,
                borderRight: "none",
                borderBottomEndRadius: 0,
                borderBottomStartRadius: -30,
              }}
            >
              Others
            </Tab>
          </TabList>

          <TabPanels
            bg="linear-gradient(to right, #201d34, #120d26)"
            roundedBottom="md"
            borderTopWidth="1px"
            borderLeftWidth="1px"
            borderRightWidth="1px"
            borderBottom="1px"
            borderTop="none"
            borderColor="gray.600"
          >
            <TabPanel>{renderAccordion(data.general)}</TabPanel>
            <TabPanel>{renderAccordion(data.blockchainServices)}</TabPanel>
            <TabPanel>{renderAccordion(data.setup)}</TabPanel>
            <TabPanel>{renderAccordion(data.others)}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
}
