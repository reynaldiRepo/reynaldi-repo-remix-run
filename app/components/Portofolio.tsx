import {
  AbsoluteCenter,
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import type { PortofolioItem } from "~/const/portofolio";
import { PortofolioList } from "~/const/portofolio";
import { MdSearch } from "react-icons/md";
import { Fragment, useState } from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";

function PortofolioItemBox(props: PortofolioItem) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Box
        position={"relative"}
        cursor={"pointer"}
        transition={"all 0.3s ease-in"}
        _hover={{ transform: "scale(1.03)" }}
        overflow={"hidden"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        borderRadius={"0px"}
        onClick={onOpen}
      >
        <AbsoluteCenter marginTop={"-15px"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"blackAlpha.700"}
            p={"10px"}
            borderRadius={"full"}
            opacity={isHover ? 1 : 0}
            transition={"all 0.3s ease-in"}
          >
            <Icon as={MdSearch} color={"white"} fontSize={"24px"} />
          </Box>
        </AbsoluteCenter>
        <Box
          position={"absolute"}
          left={"0px"}
          top={"0px"}
          w={"full"}
          h={"full"}
          bg={isHover ? "transparent" : "blackAlpha.200"}
        />
        <Image
          w={"full"}
          src={props.imageThumb}
          aspectRatio={"3/2"}
          objectFit={"cover"}
        />
        <Box
          pos={"absolute"}
          left={"0px"}
          bottom={"0px"}
          bg={"black"}
          w={"full"}
          p={"15px 15px"}
        >
          <Text
            color={"yellow.400"}
            fontSize={"xs"}
            fontWeight={"600"}
            textTransform={"uppercase"}
          >
            {props.title}
          </Text>
          <Text color={"white"} fontSize={"xx-small"} fontWeight={"light"}>
            {props.description.substring(0, 90)}... read more
          </Text>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered>
        <ModalOverlay bg={"blackAlpha.800"} />
        <ModalContent
          bg={"black"}
          boxShadow={"dark-lg"}
          p={"0px"}
          borderRadius={"0px"}
          overflow={"hidden"}
          pb={"30px"}
        >
          <ModalCloseButton
            pos={"absolute"}
            top={"0px"}
            right={"0px"}
            bg={"black"}
            zIndex={"20"}
            borderRadius={"0px"}
            borderBottomLeftRadius={"8px"}
            color={"yellow.400"}
          />
          <ModalBody p={"0px"}>
            <Box>
              <Slider
                dots={false}
                speed={800}
                slidesToShow={1}
                slidesToScroll={1}
                centerMode={false}
                focusOnSelect={false}
                arrows={false}
                accessibility={false}
              >
                {props.images.map((img, idx) => {
                  return (
                    <Box w={"full"} key={`${idx}-image-portofolio`}>
                      <Image
                        aspectRatio={"16/9"}
                        w={"full"}
                        src={img}
                        objectFit={"cover"}
                      />
                    </Box>
                  );
                })}
              </Slider>
            </Box>
            <Box p={"20px"}>
              <Box
                display={"flex"}
                justifyContent={"start"}
                flexWrap={"wrap"}
                mb={"10px"}
                gap={"5px"}
              >
                {props.platform.map((platform, idx) => {
                  return (
                    <Box
                      key={`platform-${idx}`}
                      backgroundColor={"yellow.400"}
                      fontSize={"xs"}
                      p={"3px 10px"}
                      borderRadius={"30px"}
                      fontWeight={"600"}
                    >
                      {platform}
                    </Box>
                  );
                })}
              </Box>
              <Box
                color={"yellow.400"}
                fontSize={"lg"}
                textTransform={"uppercase"}
                fontWeight={"600"}
              >
                {props.title}
              </Box>
              <Box mt={"10px"} color={"white"} fontSize={"xs"}>
                {props.description}
              </Box>
              {!props.isConfidential && (
                <Box display={"flex"} justifyContent={"start"} mt={"30px"}>
                  <Link
                    href={props.url}
                    target="_blank"
                    color={"yellow.400"}
                    background={"transparent"}
                    border={"1px"}
                    borderColor={"yellow.400"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    p={"5px 8px"}
                    borderRadius={"8px"}
                    textDecor={"none"}
                    fontWeight={"600"}
                    transition={"all 0.3s ease-in"}
                    _hover={{
                      textDecor: "none",
                      bg: "yellow.400",
                      color: "black",
                    }}
                  >
                    Open <Icon as={FaLink} />
                  </Link>
                </Box>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default function Portofolio() {
  const [isSmallerThan886] = useMediaQuery("(max-width: 886px)");
  const [isSmallerThan585] = useMediaQuery("(max-width: 585px)");

  return (
    <Box w={"full"} bg={"#F5F5F5"}>
      <Container maxW={"5xl"} py={"20"}>
        <Box mb={"10"} textAlign={"center"}>
          <Heading textTransform={"uppercase"} color={"yellow.400"}>
            My Recent Work
          </Heading>
          <Text mt={"5px"}>
            Here are a few past design projects I've worked on. Want to see
            more?{" "}
            <Link
              href="mailto:reynald.gresik@gmail.com"
              textDecoration={"underline"}
            >
              Email me.
            </Link>
          </Text>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={
            isSmallerThan886
              ? isSmallerThan585
                ? "repeat(1, minmax(0, 1fr))"
                : "repeat(2, minmax(0, 1fr))"
              : "repeat(3, minmax(0, 1fr))"
          }
          gap={"10px"}
        >
          {PortofolioList.map((pl, idx) => {
            return <PortofolioItemBox key={idx} {...pl} />;
          })}
        </Box>
      </Container>
    </Box>
  );
}
