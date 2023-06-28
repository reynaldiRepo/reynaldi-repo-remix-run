import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Container, Heading, Text } from "@chakra-ui/layout";
import myImage from "~/assets/my.jpeg"
import { useMediaQuery } from "@chakra-ui/media-query";
import { Image } from "@chakra-ui/react";

export default function AboutMe() {
    const [isSmallerThan576] = useMediaQuery("(max-width: 576px)")
    const [isSmallerThan1020] = useMediaQuery("(max-width: 1020px)")
    return (
        <Box w={"full"} bg={"white"}>
            <Container maxW={"5xl"}
                px={10}
                py={isSmallerThan1020 ? "16" : "20"}
                display={"flex"}
                flexDirection={isSmallerThan1020 ? "column" : "row"}
                alignItems={"center"} gap={"10"}
            >
                <Image src={myImage}
                    w={isSmallerThan576 ? "40" : "60"}
                    h={isSmallerThan576 ? "40" : "60"}
                    borderRadius={"full"}
                />
                <Box>
                    <Box mb={"8"} display={"flex"} justifyContent={isSmallerThan1020 ? "center" : "start"}>
                        <Heading textAlign={"center"} color={"yellow.400"} textTransform={"uppercase"}>About Me</Heading>
                    </Box>
                    <Box textAlign={"justify"}>
                        <Text fontSize={"md"} display={"block"} mb={"5"}>
                            Hello I'm <b>Reynaldi</b>, a seasoned <b>full stack developer</b> with over 3 years of professional experience. I obtained my bachelor's degree in Informatic Engineering from the University of Trunojoyo Madura in 2021.
                        </Text>

                        <Text fontSize={"md"}>
                            Coding is not just a job for me; it's my passion. I thrive on solving complex problems and designing intuitive applications and systems. Throughout my career, I have specialized in full stack development, allowing me to seamlessly handle both frontend and backend tasks. While I am proficient in various programming languages, my current infatuation lies with JavaScript.
                        </Text>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}