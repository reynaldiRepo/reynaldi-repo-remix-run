import { Box } from "@chakra-ui/react";

export default function Footer(){
    return (
        <Box 
            w={"full"} 
            p={"10px"} 
            bg={"black"} 
            display={"flex"} 
            alignItems={"center"} 
            justifyContent={"center"} 
            color={"#E0E0E0"} 
            fontSize={"xs"} 
            textAlign={"center"}
            fontWeight={"300"}
        >
            Copyright © {new Date().getFullYear()} ReynaldiRepo. All Rights Reserved
        </Box>
    )
}