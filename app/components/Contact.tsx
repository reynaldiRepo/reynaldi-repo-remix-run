import { Box, Container, Textarea, FormControl, Heading, Input, Text, Icon, Link, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaCircleNotch, FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { MdCheck, MdEmail, MdError, MdPhone } from "react-icons/md";

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    const [lifetime, setLifetime] = useState<number>(Date.now());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [msgWarning, setMsgWarning] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const handleSubmit = async () => {
        let _lifetime = Math.floor(((Date.now() - lifetime) / 1000))
        var formdata = new FormData();
        formdata.append("email", email);
        formdata.append("name", name);
        formdata.append("msg", msg);
        formdata.append("lifetime", _lifetime.toString());

        setIsLoading(true);
        setIsError(false);
        setMsgWarning("")
        try {
            let res = await fetch("http://localhost:3000/email", {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            })
            let json = await res.json();
            console.log(json);
            if (json['status'] == 200) {
                setIsError(false);
            } else {
                setIsError(true);
            }
            setMsgWarning(json['msg'])
        } catch (error) {
            setIsError(true);
            setMsgWarning("Server Error please try again")
        }
        setIsLoading(false);
    }

    return (
        <Box w={"full"} bg={"black"}>
            <Container maxW={"xl"} py={"20"}>
                <Box mb={"10"} display={"flex"} justifyContent={"start"}>
                    <Heading textTransform={"uppercase"} color={"yellow.400"}>
                        <Text color={"white"}>Do you have any Project?</Text> Let’s Talk
                    </Heading>
                </Box>
                <Box display={"flex"} flexWrap={"wrap"} mb={"20px"} gap={"10px"}>
                    <Link
                        target="_blank"
                        display={"flex"}
                        w="40px" h={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        borderRadius={"0"}
                        border={"1px"}
                        borderColor={"yellow.400"}
                        href="tel:+6281332826907"
                    >
                        <Icon as={MdPhone} color={"yellow.400"} fontSize={"xl"} />
                    </Link>
                    <Link
                        target="_blank"
                        display={"flex"}
                        w="40px" h={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        borderRadius={"0"}
                        border={"1px"}
                        borderColor={"yellow.400"}
                        href="mailto:reynald.gresik@gmail.com"
                    >
                        <Icon as={MdEmail} color={"yellow.400"} fontSize={"xl"} />
                    </Link>
                    <Link
                        target="_blank"
                        display={"flex"}
                        w="40px" h={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        borderRadius={"0"}
                        border={"1px"}
                        borderColor={"yellow.400"}
                        href="https://api.whatsapp.com/send/?phone=6281332826907&text=Hi Reynaldi&type=phone_number&app_absent=0"
                    >
                        <Icon as={FaWhatsapp} color={"yellow.400"} fontSize={"xl"} />
                    </Link>
                    <Link
                        target="_blank"
                        display={"flex"}
                        w="40px" h={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        borderRadius={"0"}
                        border={"1px"}
                        borderColor={"yellow.400"}
                        href="https://www.linkedin.com/in/aldi-reynaldi/"
                    >
                        <Icon as={FaLinkedin} color={"yellow.400"} fontSize={"xl"} />
                    </Link>
                    <Link
                        target="_blank"
                        display={"flex"}
                        w="40px" h={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        borderRadius={"0"}
                        border={"1px"}
                        borderColor={"yellow.400"}
                        href="https://github.com/reynaldiRepo"
                    >
                        <Icon as={FaGithub} color={"yellow.400"} fontSize={" xl"} />
                    </Link>
                </Box>
                <Box display={"grid"} gridTemplateColumns={"repeat(1, minmax(0,1fr))"} gap={"15px"}>
                    <FormControl id="name">
                        <Input
                            px={"10px"}
                            h={"42px"}
                            appearance={"none"}
                            fontSize={"sm"}
                            placeholder="Your name.."
                            name="name"
                            border={"none"}
                            bg={"#2C2C2C"}
                            color={"yellow.400"}
                            borderRadius={"0px"}
                            onChange={(e) => setName(e.target.value)}
                            _placeholder={{ fontWeight: "400", color: "#A4A4A4" }}
                            _focusVisible={{
                                outline: "none",
                           }}
                        />
                    </FormControl>
                    <FormControl id="email">
                        <Input
                            px={"10px"}
                            h={"42px"}
                            appearance={"none"}
                            fontSize={"sm"}
                            placeholder="Your email.."
                            name="email"
                            border={"none"}
                            bg={"#2C2C2C"}
                            color={"yellow.400"}
                            borderRadius={"0px"}
                            onChange={(e) => setEmail(e.target.value)}
                            _placeholder={{ fontWeight: "400", color: "#A4A4A4" }}
                            _focusVisible={{
                                outline: "none",
                           }}
                        />
                    </FormControl>
                    <FormControl id="message">
                        <Textarea
                            px={"10px"}
                            h={"200px"}
                            appearance={"none"}
                            fontSize={"sm"}
                            placeholder="Message..."
                            name="message"
                            border={"none"}
                            bg={"#2C2C2C"}
                            color={"yellow.400"}
                            borderRadius={"0px"}
                            onChange={(e) => setMsg(e.target.value)}
                            _placeholder={{ fontWeight: "400", color: "#A4A4A4" }}
                        />
                    </FormControl>
                    <Button
                        maxW={"100px"}
                        type="button"
                        mt={"5px"}
                        border={"1px"}
                        bg={"transparent"}
                        borderColor={"yellow.400"}
                        fontSize={"md"}
                        color={"yellow.400"}
                        borderRadius={"0px"}
                        onClick={handleSubmit}
                        _hover={{
                            bg: "yellow.400",
                            color: "black"
                        }}
                    >
                        SEND
                        {isLoading ?
                            <Icon className="rotate" as={FaCircleNotch} fontSize={"xs"} ml={"5px"} />
                            :
                            <Icon as={FaPaperPlane} fontSize={"xs"} ml={"5px"} />
                        }

                    </Button>
                </Box>
                {msgWarning !== "" ?
                    <Box mt={"20px"} color={isError ? "red.500" : "yellow.400"} fontWeight={"600"} display={"flex"} alignItems={"center"} gap={"10px"}>
                        {isError ?
                            <Icon as={MdError} />
                            :
                            <Icon as={MdCheck} />
                        }
                        {msgWarning}
                    </Box>
                    :
                    null
                }
            </Container>
        </Box>
    )
}