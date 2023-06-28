import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Flex, Heading, Image, Link, List, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import { ExperienceData, ExperiencesList } from "~/const/experience";

function ExperienceItem(props: { data: ExperienceData }) {
    const [smallerThan575] = useMediaQuery("(max-width: 575px)")
    return (
        <AccordionItem>
            <Box>
                <AccordionButton
                    py={"6"}
                    px={"0"}
                    _hover={{ bg: "white" }}
                    _expanded={{ pb: "2" }}>
                    <Flex justifyContent={"start"} alignItems={"center"} w={"full"} gap={"3"}>
                        <Image
                            src={props.data.icon}
                            w={"50px"}
                        />
                        <Box w={"full"} textAlign={"left"}>
                            <Heading
                                fontSize={smallerThan575 ? "medium" : "large"}
                                textOverflow={"ellipsis"}>
                                {props.data.title}
                            </Heading>
                            <Box lineHeight={"1.2"}>
                                <Box fontSize={smallerThan575 ? "xs" : "sm"} mr={"2"} display={"flex"} columnGap={"2"} flexWrap={"wrap"} alignItems={"end"}>
                                    <Link
                                        href={props.data.companyURL}
                                        target="_blank"
                                        fontWeight={"semibold"}
                                        color={"yellow.400"}
                                        whiteSpace={"nowrap"}
                                    >
                                        {props.data.company}
                                    </Link>
                                    <Text whiteSpace={"nowrap"}>
                                        {props.data.location}
                                    </Text>
                                </Box>
                                <Text fontSize={smallerThan575 ? "xs" : "xs"} color={"#9D9D9D"}>
                                    {props.data.fromTo}
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>
            </Box>
            <AccordionPanel pb={8} px={0}>
                <Text
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"yellow.400"}
                    mb={"2"}
                >
                    Responsibility:
                </Text>
                <List mb={"4"}>
                    {props.data.jobDisk.map((job, idx) => {
                        return (
                            <ListItem key={idx} fontSize={"sm"} px={"15px"} position={"relative"}>
                                <Box pos={"absolute"} bg={"yellow.400"} w={"5px"} h={"5px"} left={"0"} top={'8px'} borderRadius={"full"} />
                                {job}
                            </ListItem>
                        )
                    })}
                </List>
                <Text
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"yellow.400"}
                    mb={"2"}
                >
                    Technology Used:
                </Text>
                <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    gap={"2"}
                >
                    {props.data.stack.map((iconStack, idx) => {
                        return (
                            <Image
                                key={`icon-stack-${idx}`}
                                src={iconStack}
                                borderRadius={"base"}
                                objectFit={"contain"}
                                w="30px"
                            />
                        )
                    })}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default function MyExperience() {
    return (
        <Box w={"full"} bg={"white"}>
            <Container maxW={"5xl"} py={"20"}>
                <Box mb={"10"} display={"flex"} justifyContent={"center"}>
                    <Heading textTransform={"uppercase"} color={"yellow.400"}>Work Experiences</Heading>
                </Box>
                <Accordion allowMultiple>
                    {ExperiencesList.map((exp, idx) => {
                        return (
                            <ExperienceItem data={exp} key={idx} />
                        )
                    })}
                </Accordion>
            </Container>
        </Box>
    )
}